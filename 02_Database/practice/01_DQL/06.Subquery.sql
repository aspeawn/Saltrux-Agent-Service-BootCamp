/* Q1)
사원명이 '노옹철'인 직원과 같은 부서에 속한 직원의 사원명과 부서코드를 조회하시오.
(힌트: WHERE절의 서브쿼리)
*/

select emp_name,
       dept_code
from tbl_employee
where dept_code = (select dept_code
                   from tbl_employee
                   where emp_name = '노옹철');

/* Q2)
전 직원의 평균 급여보다 많은 급여를 받는 직원의 사번, 사원명, 직급코드,
급여를 조회하고 급여를 기준으로 내림차순 정렬하시오.
(힌트: AVG를 사용한 서브쿼리)
*/

select emp_id,
       emp_name,
       dept_code,
       salary
from tbl_employee
where salary > (select avg(salary)
                from tbl_employee)
order by salary desc;


/* Q3)
부서별 급여 합계를 먼저 구한 뒤, 급여 합계가 가장 큰 부서의 부서명과
급여 합계를 조회하시오.
(힌트: FROM절 서브쿼리, GROUP BY, JOIN, ORDER BY, LIMIT)
*/

select deptsum.dept_title,
       deptsum.`부서별 급여 합계`
from (select dept_title,
             sum(a.salary) as '부서별 급여 합계'
      from tbl_employee a
               join tbl_department b on a.dept_code = b.dept_id
      group by dept_title
      order by sum(a.salary) desc
      limit 1) as deptsum;


/* Q4)
부서가 배정된 직원 중 각 부서의 최고 급여를 받는 직원의 사원명, 직급명,
부서명, 급여를 조회하시오. 최고 급여가 같은 직원은 모두 조회하시오.
(힌트: 상관 서브쿼리, MAX, JOIN)
*/
select a.emp_name,
       a.job_code,
       b.dept_title,
       a.salary
from tbl_employee a
         join tbl_department b on a.dept_code = b.dept_id
where dept_code is not null
  and a.salary = (select max(e.salary)
                  from tbl_employee e
                  where e.dept_code = a.dept_code);

-- is not null in (서브쿼리)  사용 불가능
# and a.salary = (select max(e.salary)
#                   from tbl_employee e
#                   where e.dept_code = a.dept_code);

/* Q5)
보너스를 받는 직원의 부서코드를 CTE로 먼저 정의하시오.
그 CTE와 EXISTS를 사용하여 보너스를 받는 직원이 한 명 이상 있는 부서의
부서코드와 부서명을 조회하고, 부서코드를 기준으로 오름차순 정렬하시오.
(힌트: WITH, EXISTS)
*/

    WITH bonus_employee as(
    select
        dept_code
from tbl_employee
    where
        bonus is not null and
        dept_code is not null)
-- --
select d.dept_id,
       d.dept_title
from tbl_department d

where exists( -- 현재 부서와 같은 부서코드가 CTE: 보너스를 받은 노동자의 부서코드와 같으면 true -> 보여준다
    select 1
    from bonus_employee b
    where b.dept_code = d.dept_id -- 보너스를 받는 사람의 부서 코드
)