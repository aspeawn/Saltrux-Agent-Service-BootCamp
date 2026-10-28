create table member_tbl
(
    memberId int          auto_increment primary key,
    name     varchar(255) not null,
    age      int          not null,
    phone    varchar(255) not null,
    CONSTRAINT uq_phone unique (phone)
);

-- Lecture/06 Built In Function 참고
create table Membership
(
    membership int auto_increment primary key,
    memberId int not null references member_tbl(memberId),      -- 직접 참조 (변수명이 같을 때는 테이블 명시하기)
    # CONSTRAINT FORIEGN KEY memberId REFERENCES memberId
    ottType varchar(255) not null,
    planName varchar(255) not null,
    enrollDate DateTime not null default now(),
    expiratDate DateTime not null,
    active boolean not null default true
)