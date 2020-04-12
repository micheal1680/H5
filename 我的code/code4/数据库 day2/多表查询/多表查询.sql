/*多表查询*/
#创建主表
create table classes(
classname char(10) primary key,
teacher char(10)
);
#创建从表
create table stus(
id int primary key auto_increment,
name char(10) not null,
sex char,
age int,
money int,
c_name char(10)
);

#查询班级名称、学生姓名、性别、缴费
#相同班级的要放在一起
#姓名根据字典的顺序排列
select s.id,c.classname,s.name,s.sex,s.money 
from classes c,stus s
#只有上面两行代码，会出现笛卡尔积现象，因此加上下面的where条件
where s.c_name=c.classname
#order by c.classname通过c.classname排序，就可以将同班级的放在一起
order by c.classname asc,s.name desc

#多表查询一定要进行笛卡尔积过滤，否则造成数据不准。笛卡尔积：同时查询两个表时，比如这里的classes和stus表，
#就会有一个学生同时由三个班主任教，而实际上一个学生只有一个班主任，造成数据不实，数据过多，就是笛卡尔积现象

#查询各班的名称以及班主任名字和人数
#但人数必须不少于2
#人数多的排在前面
select c.classname as 班级名称,c.teacher as 班主任,count(*) as 人数
from classes c,stus s
#消除笛卡尔积
where c.classname=s.c_name
group by c.classname
having count(*)>1
order by count(*) desc

#查询没有人员的班级
#相当于查询有人员的班级有哪些,会将所有的班级记录返回
select c_name from stus
#distinct：其作用就是将出现的相同的名称只返回一个即可。但是也因为它，导致该方法效率低。结果为：->一班，二班，三班
select distinct c_name from stus

select classname from classes
where classname not in('一班','二班','三班');
#使用了：嵌套查询（子查询）
select classname from classes
where classname not in(
select distinct c_name from stus
);

#查询班级平均年龄在30及以上的班级   
#(若要查询count(*)就必须要使用group by,但是需要分组时也要用group by)
select c.classname as 班级名称,c.teacher as 班主任, avg(age) as 平均年龄,avg(money) as 平均工资
from classes c,stus s
where c.classname=s.c_name
group by c.classname
having avg(age)>=30
#由于默认是asc，想要反过来排序，就换成desc，asc和desc对于文字字典排序的使用与数字排序不太一样（一班（y）、三班(s)、二班(e)->降序排列）
order by c.classname asc
