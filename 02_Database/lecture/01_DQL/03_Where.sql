-- WHERE
-- 조건에 맞는 행만 조회할 떄 사용
-- BETWEEN, IN, LIKE


SELECT
    menu_name,
    menu_price,
    orderable_status
FROM tbl_menu
WHERE orderable_status ='Y';

-- menu_price가 13000원인 메뉴의 이름과 가격을 보여라
SELECT
    menu_price,
    menu_name
FROM tbl_menu
WHERE menu_price = 13000;


SELECT
    menu_price,
    menu_name
FROM tbl_menu
WHERE menu_price > 13000;

SELECT
    menu_price,
    menu_name
FROM tbl_menu
WHERE menu_price < 13000;

SELECT
    menu_price,
    menu_name
FROM tbl_menu
WHERE menu_price != 13000;

-- 논리연산 AND, OR
SELECT
    category_code,
    menu_price,
    orderable_status,
    menu_name
FROM tbl_menu
WHERE
    orderable_status = 'Y' AND category_code = 10
order by menu_price;

-- 우선순위
-- AND 연산이 먼저 수행된다.
select 1 and 0;
select 1 or 0 and 0;    -- or 먼저 수행

-- 메뉴 가격 10000 이상 25000 이하인 데이터 menu_price순으로 오름차순 정렬
select
    menu_name,
    menu_price,
    category_code
from tbl_menu
where
    menu_price not between 10000 and 25000
order by menu_price;

-- LIKE 연산자
-- 와일드카드
-- _ : 딱 한글자
-- % : 글자수 제한 없음
select menu_name
from tbl_menu
where
    menu_name like '%마늘%';  -- 중간에 '마늘'이 들어있는 메뉴 이름을 찾아라

select menu_name
from tbl_menu
where
    menu_name like '_마늘%';  -- 앞에 어떤 한글자가 오고 '마늘'온 모든 이름을 찾아라

select menu_name
from tbl_menu
where menu_name like '_마늘%';  -- 앞에 어떤 한 글자가 오고 '마늘'온 모든 이름을 찾아라


-- IN
select
    menu_name,
    category_code
from tbl_menu
where category_code in (4,5,6)
order by category_code;


-- IS NULL : NULL값을 확인하는 메소드
select
    category_name,
    ref_category_code
from tbl_category
where ref_category_code is null;

-- 부정
select
    category_name,
    ref_category_code
from tbl_category
where ref_category_code is not null;


