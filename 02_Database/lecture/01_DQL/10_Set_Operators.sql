-- SET
-- 여러 SELECT 결과를 결합할 때 사용
-- 컬럼의 개수와 같은 위치의 데이터 타입 호환되어야함
-- UNION : 중복을 제거
-- UNION ALL : 중복을 유지

select
    menu_code, menu_name, menu_price, category_code, orderable_status
    from tbl_menu
where
    category_code = 10

union

select menu_code, menu_name, menu_price, category_code, orderable_status
from tbl_menu
where
    menu_price < 9000;



select
    menu_code, menu_name, menu_price, category_code, orderable_status
from tbl_menu
where
    category_code = 10

union all -- 중복 제거 x

select menu_code, menu_name, menu_price, category_code, orderable_status
from tbl_menu
where
    menu_price < 9000;

--
-- 교집합
select a.menu_code,
       a.menu_name,
       a.menu_price,
       a.category_code,
       a.orderable_status
from tbl_menu a
join (select menu_code, menu_name, menu_price, category_code, orderable_status
          from tbl_menu
          where menu_price < 9000) b on (a.menu_price = b.menu_code);
