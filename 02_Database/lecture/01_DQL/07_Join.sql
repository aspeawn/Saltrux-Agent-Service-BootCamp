-- JOIN
-- 관련 컬럼을 기준으로 여러 테이블의 데이터를 조회할 때 사용
-- JOIN의 종류
-- INNER JOIN : 양쪽 테이블에 모두 존재하는 데이터(행)만 조회
-- LEFT/RIGHTER JOIN : 기준 테이블의 일치하지 않는 데이터(행)도 포함

-- INNER JOIN
-- INNER 생략 가능
select
    a.menu_name,
    b.category_name
from tbl_menu as a
inner join tbl_category b
on -- 조건
    a.category_code = b.category_code;

-- LEFT JOIN
-- tbl_category에 있는 모든 카테고리를 출력하고,
-- tbl_menu에도 같은 카테고리 메뉴가 있으면 해당 메뉴의 이름을 출력함
select a.category_name,
       b.menu_name
from tbl_category a
         left join tbl_menu b -- 기준
                   on -- 조건

                       a.category_code = b.category_code;

select
    a.menu_name,
    b.category_name
from tbl_menu as a
         right join tbl_category b -- 기준
                    on -- 조건
                        a.category_code = b.category_code;

-- CROSS JOIN 모든 조합
select
    a.menu_name,
    b.category_name
from tbl_menu as a
         cross join tbl_category b; -- 기준


-- USING
-- 같은 이름의 컬럼을 연결하여 조회 가능함 (약간 정렬 같은 기능)
select
    a.menu_name,
    b.category_name
from tbl_menu as a
         join tbl_category b -- 기준
         using (category_code);


-- SELF JOIN (상위 카테고리명을 셀프 JOIN해서 만듦)
-- 자신의 테이블을 자신이 JOIN
select
    a.category_name as 카테고리명,
    b.category_name as 상위카테고리명
from tbl_category a
         join tbl_category b
on a.ref_category_code = b.category_code-- 기준




