#创建数据库
create database demo;

#删除数据库
drop database demo;

#创建表
create table user(
	id int primary key auto_increment,
	name char(20) not null,
	sex char check(sex='男',sex='女'),
	stuId int unique,
	phone char(20),
	address char(10) default "成都"
);

#删除表
drop table user;

/*一对一关系*/
#创建主表
create table a_country(
	id int primary key auto_increment,
	name char(10),
	language char(10)
);
#创建从表
create table a_president(
	id int primary key auto_increment,
	name char(10) not null,
	sex char,
	f_country_id int unique
);
#为从表中的字段添加外键约束
alter table a_president 
add constraint foreign key(f_country_id)
references a_country(id)
on delete cascade;


/*一对多关系*/
#创建主表
create table b_class(
	id int primary key auto_increment,
	classname char(10),
	headteacher char(10)
);
#创建从表
create table b_stu(
	id int primary key auto_increment,
	name char(10),
	sex char,
	f_class_id int
);
#为从表的f_class_id字段添加外键约束，
#on delete set null表示当主表的记录删除时，与之关联的从表对应值设置为null
#需要注意此时外键不能非空约束（not null）
alter table b_stu 
add constraint foreign key(f_class_id)
references b_class(id)
on delete set null;


/*多对多关系*/
#创建主表
create table c_teacher(
	id int primary key auto_increment,
	name char(10)
)
#创建主表
create table c_stu(
	id int primary key auto_increment,
	name char(10),
	sex char
)
#创建从表，在从表中实现多对多关系
create table c_middle(
	id int primary key auto_increment,
	f_teacher_id int,
	f_stu_id int
)
#为从表中的字段添加外键约束
#on delete no action不允许删除主表的记录
alter table c_middle 
add constraint foreign key(f_teacher_id)
references c_teacher(id)
on delete no action
#为从表中的字段添加外键约束
alter table c_middle 
add constraint foreign key(f_stu_id)
references c_stu(id)c_middle
on delete no action


