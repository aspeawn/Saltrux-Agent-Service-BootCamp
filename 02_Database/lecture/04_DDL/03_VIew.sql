-- VIEW
-- select문을 이름과 함께 저장해서 테이블처럼 사용하는 가상 테이블

-- 장점
-- 복잡한 select문을 단순하게 재사용 가능하다.
-- 사용자에게 필요한 컬럼과 행만 공개할 수 있다.

create view hansik as
    select
        menu_code, menu_name, menu_price, category_code, orderable_status
        from tbl_menu
        where category_code = 4  -- code 4 : 한식
with check option; -- view 입력, 수정을 행이 view의 where 조건을 만족하도록 검사

select * from hansik;

insert into tbl_menu (menu_code, menu_name, menu_price, category_code, orderable_status)
values (88, '닭칼국수 김밥', 5000,4,'Y');

delete from tbl_menu
where menu_code = 88;

-- -----------------------------------------

create view hansik as
select
    menu_code, menu_name, menu_price, category_code, orderable_status
from tbl_menu
where category_code = 4  -- code 4 : 한식
    with check option; -- view 입력, 수정을 행이 view의 where 조건을 만족하도록 검사

select * from hansik;

insert into tbl_menu ( menu_name, menu_price, category_code, orderable_status)
values ('닭칼국수 김밥', 5000,4,'Y');




-- LAST_INSERT_ID는 auto increments한 값에 대해서 자동으로 가져옴
set @menu_code = LAST_INSERT_ID();

select * from hansik
where menu_code = @menu_code;

-- 테스트 데이터 삭제
delete from tbl_menu
where menu_code = 88;



-- VIEW를 통해 DML
insert into hansik (menu_code, menu_name, menu_price, category_code, orderable_status)
values (88, '닭칼국수 김밥', 5000,4,'Y');

set @menu_code = LAST_INSERT_ID();

select * from hansik
where menu_code = @menu_code;

-- with check option으로 view의 where 절의 조건을 만족하지 못해 생성 불가
insert into hansik (menu_code, menu_name, menu_price, category_code, orderable_status)
values (89,'확인용 레모네이드', 4000, 5, 'Y');



-- --------------------------

create view category_menu_summary as
select
    category_code,
    count(*) as menu_count,
    FLOOR(AVG(menu_price)) AS avg_price
from tbl_menu
group by category_code;


-- -------------------------
-- 뷰 재정의

create or replace view hansik as
select
    a.menu_code, a.menu_name,
    truncate(a.menu_price/1000, 1) as price_in_thousands,
    b.category_name
from tbl_menu a
join tbl_category b on a.category_code = b.category_code
where b.category_code = 4;

-- view 삭제
drop view if exists category_menu_summary;

# select * from category_menu_summary;

# show full tables
# where Table_type = 'view';