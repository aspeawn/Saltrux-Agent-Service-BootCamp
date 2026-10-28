-- ORDER BY
-- 특정 칼럼이나 값을 기준으로 조회 결과를 정렬할 때 사용
-- ASC : 오름차순(생략 가능), DESC : 내림차순

SELECT menu_code,
       menu_name,
       menu_price
FROM tbl_menu
ORDER BY
#     menu_price ASC; -- 오름차순
      menu_price DESC,
      menu_name ASC; -- 내림차순

      -- 메뉴코드, 이름, 가격을 조회
      -- 가격은 1000원 단위로 보여주세요

SELECT menu_code,
       menu_name,
       menu_price/1000 AS menu_price천원단위
FROM tbl_menu
ORDER BY
#     menu_price ASC; -- 오름차순
menu_price DESC,
menu_name ASC; -- 내림차순

-- field("찾을 문자" "필드") -> 찾을 문자의 인덱스 알려줌 (charAt)
select field('C', 'A', 'B', 'C');
select field('D', 'A', 'B', 'C');

select
    *
from
    tbl_menu
order by
    field(orderable_status, 'N', 'Y');



