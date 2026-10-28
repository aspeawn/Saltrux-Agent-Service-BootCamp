-- GROUP BY
-- 같은 값을 가진 행을 하나의 그룹으로 묶을 때
-- 통계, 집계를 계상할 때 사용
-- HAVING : 그룹화 한 이후에 결과를 필터링
-- WHERE : 그룹화를 하기 전에 데이터를 필터링

select
    category_code,
    count(*)
from tbl_menu
group by category_code;

select
    category_code,
    count(*),
    sum(menu_price)
    from tbl_menu
group by category_code;

-- Having
-- 그룹화를 한 이후에 조건을 작성할 때

select category_code,
       count(*)
    from tbl_menu
group by category_code
having category_code between 5 and 8;

-- ROLLUP
-- 각 그룹에 대한 소계나 총계를 계산해 resultset에 포함

select category_code,
       sum(menu_price)
    from tbl_menu
    group by
        category_code
    with rollup;


-- 먼저나온 컬럼의 총합을 구하고 이후에 나오는 컬럼의 총합
select menu_price,
       category_code,
       count(*),
       sum(menu_price)
#        sum(category_code)
from tbl_menu
group by
    menu_price, category_code       -- 오른쪽이 이후에 나오는 컬럼이므로 그걸 기준(null 출력)으로 총합 출력
                                    -- category_code를 소거 이후 menu_price에 총합 출력
                                    -- -> category_code,menu_price를 소거이후 모든 총합 출력 (맨 아랫줄)
    with rollup

