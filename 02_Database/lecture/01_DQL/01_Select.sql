
-- SELECT
-- 테이블의 데이터를 조회할 때 사용

-- SELECT (조회할컬럼) FROM (조회할테이블);
SELECT menu_name FROM tbl_menu;
SELECT * FROM tbl_menu;

-- 여러 열의 데이터 검색
SELECT
    menu_code AS 코드,
    menu_name AS 이름,
    menu_price AS 가격
FROM tbl_menu;

-- select 연산
SELECT 5+5;

-- 내장함수
-- as : 컬럼의 별칭을 지정할 수 있다.
SELECT now() AS time;  -- 결과컬럼명을 수정

SELECT concat('B.', 'ear') AS name;