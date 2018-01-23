
create table user(
  uid int primary key auto_increment,
  uname varchar(32),
  upwd varchar(32)
);

insert into user values(null,'tom','123456');	