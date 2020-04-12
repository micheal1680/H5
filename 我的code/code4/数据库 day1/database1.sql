create database my;
drop database my;


create table myli(
id int primary key auto_increment,
name char(20) not null,
sex char check(sex='男',sex='女'),
stuId int unique,
phone char(20) ,
address char(10) default "成都"
);


drop table myli;

/*关系体现在数据上，从表中添加的数据就可以看出表之间的关系*/
/*表的一对一关系的实现*/
#创建主表a_country
create table a_country(
id int primary key auto_increment,
name char(10) not null,
language char(10)
);
#创建主表a_country的从表a_president
create table a_president(
id int primary key auto_increment,
name char(10) not null,
sex char,
f_country_id int unique
)
#对从表a_president中的f_country_id字段添加外键约束
alter table a_president
add constraint foreign key(f_country_id)
references a_country(id)
on delete cascade;


/*一对多关系*/
#创建主表
create table b_class(
id int primary key auto_increment,
name char(10),
headteacher char(10)a_countryb_class
);
#创建从表
create table b_stu(
id int primary key auto_increment,
name char(10),
sex char,
f_class_id int
);
#为从表的f_class_id字段添加外键约束
alter table b_stu
add constraint foreign key(f_class_id)
references b_class(id)
on delete set null;

/*多对多关系*/
#创建主表1
create table c_teacher(
id int primary key auto_increment,
name char(10)
);
#创建主表2
create table c_stu(
id int primary key auto_increment,
name char(10)
);
#创建从表
create table c_middle(
id int primary key auto_increment,
f_c_teacher int,
f_c_stu int
);
#为从表中的f_c_teacher和f_c_stu添加外键约束
alter table c_middle
add constraint foreign key(f_c_teacher)
references c_teacher(id)
on delete no action;

alter table c_middle
add constraint foreign key(f_c_stu)
references c_stu(id)
on delete no action;

select * from a_country;
select name from a_country;
select name from a_country where id=1;
select * from a_country,a_president;
select * from a_country,a_president where a_country.id=a_president.f_country_id;
select con.id,con.name,con.language,pre.name,pre.sex from a_country con,a_president pre where con.id=pre.f_country_id;

#由于id已经确定，因此不可以通过再次运行来添加记录
insert into person(id,age,name,address,sex) values (1,'30','莫绍谦','浙江','男');
#可以通过再次运行来添加记录
personinsert into person(age,name,address,sex) values (24,'童雪','上海','女');
insert into person(sex,name,age,address) values ('女','莫暮雪',3,'法国');
#这是一种最直接的添加记录的方法，但是添加数据时顺序必须要和表的字段顺序一模一样
insert into person values (9,'男',30,'白子画','长留')

#修改或刷新表中数据
update person set name='李赫' where id=2
update person set name='李重光',sex='男' where id=6;
update person set address='四川成都' where id>3 and id<6;
update person set age=25 where id<3 or id>7
update person set address='北京' where id in(2,4,6);
update person set name='区舒云' where id not in(1,2,4,6,8,9);

delete from b_class where id=2
delete from b_class where id=1 or name='火箭班';
delete from b_class where id=2 and age=12;

#group by表示分组查询，并且统计每一组的人数，通过count（*）表示
#group by的使用：group by的后面跟的必须是可以用于分组的字段，而用了group by，则select后面即查询的必须只能是能够跟分组同样分组的，即分组之后能够显示的。
#例如：person表通过sex来分组，可以分为2组（男和女），此时select后面就不可以跟name字段，因为性别为男的有很多个名字，在结果
#表中根本无法显示，假如在这张表中性别为男的名字都一样，刚好可以分组与性别分组对应，就可以在select后面跟name，可以显示出来
select sex as 性别, count(*) as 人数
from person
group by sex;

select sex as 性别, count(*) as 人数
from person
where id>4
group by sex;

select sex as 性别, count(*) as 人数, max(age), min(age),sum(age),avg(age)
from person
group by sex