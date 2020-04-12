create table stu(
	id int primary key auto_increment,
	name text not null,
	sex char,
	score float,
	birthday date
);

#添加date类型的数据时，需要按照格式“年-月-日”来添加，
#而且使用引号括起来
insert into stu(name, sex, score, birthday) 
values("猪八戒", "男", 80.2, "2019-2-14");


#更改数据
update stu 
set name="孙悟空", score=90.5, birthday="2019-11-26"
where id=1;

#删除数据
delete from stu where id=6;

#查询数据
#查询表中所有的记录，*表示所有字段
select * from stu;

#查询表中所有记录的name和score字段
select name, score from stu;
#查询指定记录的指定字段
select name, score, birthday from stu where id=1 or id=3;
select name, score, birthday from stu where id in(1,3);

#分组查询并统计各组人数
select count(*) as 人数
from stu
group by sex;


#分组查询，显示每个组中的人数，最高分，最低分，总分，平均分
select sex as 性别, 
count(*) as 人数, 
max(score) as 最高分, 
min(score) as 最低分, 
sum(score) as 总分, 
avg(score) as 平均分
from stu
group by sex;

/*
where表示查询指定条件的记录
group by在满足where的情况下再进行分组
having在满足group by的情况下在筛选条件
having一定在group by之后使用
*/
select type as 类别, count(*) as 人数
from stu
where id > 2 
group by type
having count(*) > 1


#查询结果并根据score升序排列， 默认就是升序，asc表示升序
select * from stu
order by score asc;

#查询结果并根据score降序排列，desc表示降序
select * from stu
order by score desc;


#先使用where过滤条件，再使用order by对指定字段进行降序排列
select * from stu
where id > 3
order by score desc;


/*
where先过滤条件
group by分组
having分组后再过滤
order by指定顺序
*/
select type, count(*) as 人数, avg(score) as 平均分
from stu 
where id > 2
group by type
having count(*) > 1
order by avg(score) desc






