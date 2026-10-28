/* Q1)
전체 직원 수와 전 직원 급여의 합계를 조회하시오.
(힌트: COUNT, SUM)
*/
select count(*) as '전체 직원 수',
       sum(salary) as '급여 합계'
from tbl_employee;



/* Q2)
부서코드별로 부서코드, 급여 합계, 평균 급여(소수점 이하 버림), 직원 수를 조회하시오.
부서가 배정되지 않은 직원도 하나의 그룹으로 포함하고,
부서코드를 기준으로 오름차순 정렬하시오.
(힌트: GROUP BY, SUM, AVG, FLOOR, COUNT)
*/
select dept_code,
       sum(salary) as '급여 합계',
       FLOOR(avg(salary)) as '평균 급여',
       count(*) as 직원수
    from tbl_employee
group by dept_code;
# order by dept_code asc;


/* Q3)
보너스를 받는 직원만 대상으로 직급코드별 직원 수를 조회하시오.
직급코드를 기준으로 오름차순 정렬하시오.
(힌트: WHERE, GROUP BY, COUNT)
*/

select job_code as 직급코드,
    count(*) as 직원수
from tbl_employee
where bonus is not null
group by job_code
order by job_code asc;

/* Q4)
부서별 평균 급여가 300만원 이상인 부서의 부서명, 직원 수,
평균 급여(소수점 이하 버림)를 조회하시오.
평균 급여를 기준으로 내림차순 정렬하시오.
(힌트: JOIN, GROUP BY, HAVING)
*/

select
       b.dept_title '부서',
       count(*) as '직원 수',
       floor(avg(a.salary)) as '평균 급여'
    from tbl_employee a
join tbl_department b on a.dept_code = b.dept_id
group by b.dept_title
having  floor(avg(salary)) >= 3000000;



/* Q5)
직급별 직급명, 직원 수, 급여 합계를 조회하고 마지막 행에 전체 직원 수와
전체 급여 합계가 표시되도록 하시오.
(힌트: JOIN, GROUP BY, WITH ROLLUP, COALESCE)
*/

select b.job_name,
       count(*),
       sum(a.salary)
from tbl_employee a
join tbl_job b on a.job_code = b.job_code
group by job_name
with rollup;