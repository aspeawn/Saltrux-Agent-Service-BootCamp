DROP TABLE IF EXISTS phone;

CREATE TABLE phone
(
    phone_code  INT,
    phone_name  VARCHAR(100) NOT NULL,
    phone_price DECIMAL(10, 2) NOT NULL,
    company     VARCHAR(30) NOT NULL,
    CONSTRAINT pk_phone PRIMARY KEY (phone_code)
);


INSERT INTO phone (phone_code, phone_name, phone_price, company)
VALUES
    (1, 'GalaxyS26',          1250000, 'Samsung'),
    (2, 'iPhone17',           1580000, 'Apple'),
    (3, 'GalaxyFold8',        2300000, 'Samsung'),
    (4, 'GalaxyS26Ultra',     1850000, 'Samsung'),
    (5, 'iPhone17Ultra',      1980000, 'Apple'),
    (6, 'GalaxyZFold8Ultra',  1800000, 'Samsung'),
    (7, 'Pixel11',            1350000, 'Google'),
    (8, 'Pixel11Pro',         1650000, 'Google');

select * from phone;

-- INDEX
-- 테이블에서 원하는 행을 빠르게 찾기 위해 사용하는 데이터베이스 객체

show index from phone;

-- explain
-- select가 어떻게 실행될 지 옵티마이저가 세운 계획을 보여줌
-- 옵티마이저 : SQL 문을 가장 효율적으로 실행할 방법을 선택하는 MYSQL 내부 기능
explain
select * from phone
where phone_name = 'Galaxy26';

-- 단일컬럼 인덱스
-- 하나의컬럼으로 구성한 인덱스
    create index idx_phone_name
    on phone (phone_name);

show index from phone;

-- 데이터가 많아질수록 인덱스로 인해 발생하는 효율이 증가
-- 인덱스를 고려할만한 컬럼
-- 1. WHERE 조건에 자주 사용하는 컬럼
-- 2. JOIN 조건에 자주 사용하는 컬럼
-- 3. ORDER BY, GROUP BY에 자주 사용하는 컬럼
-- 4. 값의 종류가 충분히 다양해 많은 행을 거를 수 있는 컬럼
explain
select * from phone
         -- 강제로 인덱스 사용
        force index (idx_phone_name)
where phone_name = 'Galaxy26';



-- 복합 인덱스
-- 두개 이상의 컬럼을 순서대로 묶어 만든 인덱스
-- phone_name, phone_price을 복합인덱스로 만든다면
-- 1. phone_name만 사용하는 조건
-- 2. home_name, phone_price를 함께 사용하는 조건일 경우 사용하기 좋음

drop index idx_phone_name on phone;

create index idx_phone_name_price
on phone (phone_name, phone_price);
show index from phone;

explain
select * from phone
where phone_name = 'iPhone17';


-- 옵티마이저의 효율이 안나옴 -> type이 ref가아닌 ALL로 출력됨
explain
select * from phone
where phone_price = 1850000;

-- 커버링 인덱스
-- 필요한 컬럼이 모두 인덱스에 있으면 테이블 행을 추가로 읽지 않음 (실행계획 : USING INDEX)
explain
select
    phone_name,
    phone_price
from phone
where phone_name = 'iPhone17';

analyze table phone; -- 인덱스 통계 갱신
optimize table phone; -- 테이블 공간을 재구성