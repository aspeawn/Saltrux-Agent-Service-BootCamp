-- DDL (Data Definition Language) 데이터 정의어
-- 데이터베이스의 구조를 생성, 변경, 초기화, 삭제할 때 사용

-- CREATE       : 새로운 객체를 생성한다.
-- ALTER        : 기존 객체의 구조를 변경
-- TRUNCATE     : 테이블의 구조는 유지하고 모든 행을 삭제
-- DROP         : 객체의 구조와 데이터를 모두 삭제

-- 테이블생성
-- if not exists : 해당 테이블이 없을 때 생성해줌
create table if not exists tb1
(
    pk int auto_increment primary key,
    fk int,
    col1 varchar(255),
    check(col1 in ('Y', 'N'))   -- 제약조건
);

describe tb1; -- 구조 확인
insert into tb1 ()
values (1,10,'Y');
select * from tb1;

-- tb2
-- auto_increment : 행을 추가할 때 자동으로 번호를 생성해주는 기능
-- Primary Key or Unique KEY가 설정된 컬럼에 사용

describe tb2;

-- insert into tb2(fk,col1)
-- values (10, 'Y'), (10,'N');

select * from tb2;

-- 수정

-- 컬럼 추가
alter table tb2
    add column col2 int not null default 0;

describe tb2;

-- 컬럼 삭제
alter table tb2
    drop column col2;

describe tb2;

-- 컬럼 수정
-- 이름, 컬럼정의(데이터타입, 제약조건)
-- alter table tb2
    -- 이름을 바꾸면서 데이터 타입, 제약조건 다시 작성
   -- change column fk change_fk BIGINT not null;

describe tb2;

alter table tb2
    -- 이름은 변경하지 않으면서 데이터 타입, 제약조건 다시 작성
    modify column change_fk int;

describe tb2;

alter table tb2
    -- 이름만 변경
    rename column change_fk to fk;
describe tb2;

-- primary key 제약조건 삭제 및 추가
-- autoincrement 컬럼 : key로 추가가 되어있어야함.


alter table tb2
modify column pk int not null;

alter table tb2 drop primary key;
describe tb2;

alter table tb2
add primary key (pk);

alter table tb2
modify column pk int not null auto_increment;


-- 삭제
create table if not exists tb3
(

    pk   int auto_increment
        primary key,
    fk   int          null,
    col1 varchar(255) null,
    check ( col1 in ('Y', 'N') )
)
    comment '삭제할 tb3입니다.';

create table if not exists tb4
(

    pk   int auto_increment
        primary key,
    fk   int          null,
    col1 varchar(255) null,
    check ( col1 in ('Y', 'N') )
)
    comment '삭제할 tb4입니다.';

create table if not exists tb5
(

    pk   int auto_increment
        primary key,
    fk   int          null,
    col1 varchar(255) null,
    check ( col1 in ('Y', 'N') )
)
    comment '삭제할 tb5입니다.';

drop table if exists tb3, tb4, tb5;
desc tb3;

-- Truncate
-- 테이블 구조는 유지하면서 모든 행(데이터)는 전부 삭제한다.
-- Auto_Increment의 값도 초기화됨


create table if not exists tb3
(

    pk   int auto_increment
        primary key,
    fk   int          null,
    col1 varchar(255) null,
    check ( col1 in ('Y', 'N') )
)
    comment '삭제할 tb3입니다.';

create table if not exists tb4
(

    pk   int auto_increment
        primary key,
    fk   int          null,
    col1 varchar(255) null,
    check ( col1 in ('Y', 'N') )
)
    comment '삭제할 tb4입니다.';

insert into tb3 (fk, col1)
values
    (10, 'Y'),
    (20,'Y'),
    (30,'Y'),
    (40,'Y'),
    (50,'Y');

select * from tb3;

delete from tb3
where pk = 5;

--
insert into tb3 (fk, col1)
values
    (50, 'Y');

truncate table tb3;

-- DELETE / TRUNCATE / DROP
-- DELETE : 선택한 행 삭제 하기 위해 사용
-- TRUNCATE : 테이블 구조를 초기화해 행을 삭제하기 위해 사용
-- DROP : 모든 행과 구조 삭제

-- select 과목, MIN MAX
-- groupby 과목
