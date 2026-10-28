/* Q1)
tbl_employee 테이블에서 부서코드가 D9인 사원을 조회하시오.
*/

    select *
        from tbl_employee
    where dept_code = 'D9';


/* Q2)
부서코드가 D6이고 급여를 200만원보다 많이 받는 직원의 이름, 부서코드, 급여를 조회하시오.
*/
    select
        emp_name,
        dept_code,
        salary
        from tbl_employee
    where dept_code = 'D6' and salary >= 2000000;

/* Q3)
보너스를 받지 않는 사원에 대해 사번, 직원명, 급여, 보너스를 조회하시오.
*/
    select
        emp_id,
        emp_name,
        salary,
        bonus
    from tbl_employee
    where bonus is NULl;

/* Q4)
tbl_employee 테이블에서 급여를 350만원 이상, 550만원 이하를 받는 직원의
사번, 이름, 급여, 부서코드, 직급코드를 조회하시오.
*/

    select
        emp_id,
        emp_name,
        salary,
        dept_code,
        job_code
        from tbl_employee
    where salary between 3500000 and 5500000

/* Q5)
tbl_employee 테이블에서 '하'가 이름에 포함된 직원의 이름, 주민번호, 부서코드를 조회하시오.
*/
    select
        emp_name,
        emp_no,
        dept_code
        from tbl_employee
    where emp_name LIKE '%하%';


/* Q6)
tbl_employee 테이블에서 부서가 배정된 직원들의 부서코드를 중복 없이 조회하시오.
단, 부서코드를 기준으로 오름차순 정렬하시오.
(힌트: WHERE, DISTINCT, ORDER BY)
*/

    select
        distinct dept_code
    from tbl_employee
    order by dept_code asc;


/* Q7)
tbl_employee 테이블에서 급여가 300만원 이상인 직원 중 급여가 높은 5명의
사번, 직원명, 급여를 조회하시오.
단, 급여가 같으면 사번을 기준으로 오름차순 정렬하시오.
(힌트: WHERE, ORDER BY, LIMIT)
*/

    select
        emp_id,
        emp_name,
        salary
        from tbl_employee
    where salary >= 3000000
    order by salary desc, emp_id asc
    limit 5;


/* Q8)
tbl_employee 테이블에서 부서코드가 D5 또는 D9이고 2000년 이후에 입사한 직원 중
입사일이 빠른 3명의 사번, 직원명, 부서코드, 입사일을 조회하시오.
(힌트: WHERE, IN, ORDER BY, LIMIT)
*/
    select
        emp_id,
        emp_name,
        dept_code,
        hire_date
        from tbl_employee
        -- IN ('D5', 'D9')
    where (dept_code = 'D5' or dept_code = 'D9') and hire_date >= '2000-01-01'
    order by hire_date asc
    limit 3;

/* Q9)
tbl_employee 테이블에서 보너스를 받는 직원들의 직급코드를 중복 없이 조회하시오.
단, 직급코드를 기준으로 오름차순 정렬하시오.
(힌트: WHERE, IS NOT NULL, DISTINCT, ORDER BY)
*/

select
    distinct job_code
    from tbl_employee
where salary is not null
order by job_code asc;

/* Q10)
tbl_employee 테이블에서 퇴직하지 않은 직원을 급여가 높은 순으로 정렬하시오.
급여가 같으면 사번을 기준으로 오름차순 정렬하고, 상위 3명을 건너뛴 다음 3명의
사번, 직원명, 급여를 조회하시오.
(힌트: WHERE, ORDER BY, LIMIT 시작위치, 개수)
*/

select
    emp_id,
    emp_name,
    salary
    from tbl_employee
where ent_date is null
order by salary desc, emp_id asc
limit 3,3;