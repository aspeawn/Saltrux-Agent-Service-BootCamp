/* Q1)
사원 테이블(tbl_employee)에 새로운 사원을 추가하시오.
사번: 901, 이름: 이지영, 주민등록번호: 910123-1234567, 이메일: lee_jy@gmail.com,
전화번호: 01055551234, 부서코드: D2, 직급코드: J2, 급여등급: S3,
급여: 3500000, 보너스: 0.15, 관리자사번: 201, 입사일: 현재 날짜,
퇴사일: NULL, 퇴직여부: N
(힌트: INSERT INTO, VALUES, CURDATE())
*/

insert into tbl_employee
values (901, '이지영', '910123-1234567', 'lee_jy@gmail.com',
        01055551234, 'D2', 'J2', 'S3', 3500000, 0.15, 201,
        curdate(), null, 'N');

/* Q2) 복습해보기
사원 테이블(tbl_employee)에서 방명수 사원의 급여와 보너스를 유재식 사원과 동일하게 변경하시오.
(힌트: UPDATE, 서브쿼리, JOIN을 이용한 임시 테이블)

   이름이 같아야함 - 서브쿼리
*/

    # 방명수 사원 급여(a) = 유재식 사원 급여(b)   ->   e.salary를 e테이블에서 방명수 행을 가져오고 서브쿼리문에서 join한 결과로 유재식의 salary를 가져옴
#     e.salary =(SELECT
#                   b.salary FROM tbl_employee a
#                        JOIN tbl_employee b
#                             ON a.emp_name = '방명수'
#                                 AND b.emp_name = '유재식'),
#
#     e.bonus =(SELECT
#                   b.bonus FROM tbl_employee a
#                        JOIN tbl_employee b
#                             ON a.emp_name = '방명수'
#                                 AND b.emp_name = '유재식')

#     a.emp_name,
#     b.salary,
#     b.bonus
# from tbl_employee a
# join tbl_employee b on (a.emp_name = '방명수' and b.emp_name = '유재식') -- 셀프 조인을 한 결과로 해당 필드가 한 행으로 결합됨
#
# where e.emp_name = '방명수';

UPDATE tbl_employee e
JOIN (
    SELECT salary, bonus
    FROM tbl_employee
    WHERE emp_name = '유재식'
) AS temp
SET
    e.salary = temp.salary,
    e.bonus = temp.bonus
WHERE e.emp_name = '방명수';


-- 서브쿼리와 JOIN을 활용하지 않고 간단하게 작성하는 방법
-- 핵심은 update 다음에 테이블이 오니 이를 연결해서 JOIN문을 작성하기 (SET문에서 하는 것이 아니다)
UPDATE tbl_employee a
    JOIN tbl_employee b
    ON b.emp_name = '유재식'
SET
    a.salary = b.salary,
    a.bonus = b.bonus
WHERE a.emp_name = '방명수';

/* Q3)
사원 테이블(tbl_employee)에서 노옹철, 전형돈, 정중하, 하동운 사원의 급여와 보너스를 유재식 사원과 동일하게 변경하시오.
(힌트: UPDATE, 서브쿼리, JOIN을 이용한 임시 테이블, IN)
*/

UPDATE tbl_employee e
    join (select salary, bonus
              from tbl_employee
where emp_name='유재식') as temp
set e.salary = temp.salary,
e.bonus = temp.bonus
where e.emp_name IN ('노옹철', '전형돈', '정중하', '하동운');


/* Q4)
사원 테이블(tbl_employee)에서 사번이 901인 사원을 삭제하시오.
(힌트: DELETE FROM, WHERE)
*/
    delete from tbl_employee
    where emp_id = 901;


/* Q5)
사원 테이블(tbl_employee)에서 부서코드가 D1인 모든 사원을 삭제하시오.
(힌트: DELETE FROM, WHERE)
*/

delete from tbl_employee
where dept_code = 'D1'