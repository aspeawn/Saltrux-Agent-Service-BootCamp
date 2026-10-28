show databases;

-- Ctrl + Enter 한줄 실행
# 주석


-- CLI에서는 mysql -u root -p
-- 계정 생성은 mysql DB에서 할 수 있다.

# use mysql;

-- my sql 데이터 베이스(시스템 데이터베이스)
-- 사용자 계정 및 권한, 타임존, 로그 .. 등을 포함한 데이터베이스

-- create user '사용자이름'@'접속가능한 위치' identified by '비밀번호'
-- ip 지정, 와일드카드(%) 어느위치에서든 접속을 허용
create user 'YK'@'%' identified by 'YK';

-- Database(Schema) 생성
create database menudb;

show databases;

-- 권한 부여
-- grant all privileges on (권한을 줄 데이터베이스).(권한을 줄 테이블) to (권한을 줄 계정)'@'범위
grant all privileges on menudb.* to 'YK'@'%';

show grants for 'YK'@'%'; -- 해당 계정이 가지고 있는 권한 목록 출력

-- select 권한을 주는 법
-- grant select on (권한을 줄 데이터베이스).(권한을 줄 테이블) to (권한을 줄 계정)'@'범위;