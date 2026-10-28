-- DML Data Manipulation Language
-- 테이블의 데이터를 추가, 수정, 삭제, 조회(DQL) 할 때 사용

-- INSERT : 데이터 추가
insert into tbl_menu
values
    (null, '바나나 해장국', 8500, 4, 'Y');

-- null 값이 가능하거나 auto_increment가 있는 컬럼을 제외하고
-- insert 하고싶은 데이터컬럼을 지정해서 insert 할 수 있다.
insert into tbl_menu(menu_name, menu_price, category_code, orderable_status)
values
    ('바나나 해장국', 8500, 4, 'Y');

-- 컬렴명을 지정해서 값을 넣을 겨웅에는 데이터 입력 순서를 바꾸어도 된다
insert into
    tbl_menu(menu_price, category_code, orderable_status, menu_name)
values
    (8500, 4, 'Y', '바나나 해장국');

insert into
    tbl_menu
values
    (null, '소시지맛아이스크림', 3500, 1, 'Y'),
    (null, '참치맛아이스크림', 4500, 4, 'Y'),
    (null, '김치맛아이스크림', 5500, 5, 'Y');

-- UPDATE : 데이터 수정
update tbl_menu -- 바뀔 테이블
set -- 바꿀 내용
    orderable_status = 'N',
    menu_name = '김치맛아아'
where
    menu_code = 40;


-- DELETE : 데이터 삭제
delete from tbl_menu
where
    menu_code  = 39;

-- 가장 가격이 저렴한 메뉴 2가지 삭제
delete from tbl_menu
order by menu_price asc
limit 2;

# -- where 조건이 명확 - SafeMode
# DELETE FROM tbl_menu
# WHERE menu_code IN (
#     SELECT menu_code
#     FROM (
#              SELECT menu_code
#              FROM tbl_menu
#              ORDER BY menu_price ASC
#              LIMIT 2
#          ) AS temp
# );

-- REPLACE
-- 데이터를 입력할 때 중복된 데이터는 덮어 쓸 수 있도록 허용해주는 SQL문
-- into 생략 가능
replace into tbl_menu
values
    (1, '바나나 해장국', 8500, 4, 'Y');