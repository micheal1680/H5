#创建主表
create table classes(
	className char(10) primary key,
	headTeacher char(10)
);
#创建从表
create table student(
	id int primary key auto_increment,
	name char(10) not null,
	sex char,
	age int,
	money int,
	c_name char(10)
);


#查询班级名称、学生姓名、性别、缴费、
#相同班级的要放在一起,
#姓名根据字典顺序排列。
select s.id, c.className, s.name, s.sex, s.money
from student s, classes c 
where s.c_name=c.className
order by c.className asc, s.name desc



#查询各班名称和人数
select c.className as班级名称, c.headTeacher as 班主任, count(*) as 人数
from classes c, student s
where c.className = s.c_name
group by c.className


/*
查询各班名称和人数,
但人数必须不少于2,
人数多的放在前面
*/
select c.className as 班级名称, c.headTeacher as 班主任, count(*) as 人数
from classes c, student s
where c.className = s.c_name
group by c.className
having count(*)>2
order by count(*) desc;


#查询没有人员的班级
select c_name from student;
#查询结果为->"一班", "二班", "三班"
select distinct c_name from student ; 
#查询结果为->"四班"
select className from classes 
where className not in("一班", "二班", "三班");

#distinct表示去除重复的字段值，只返回一个
#查询结果为->"四班"
select className 
from classes
where className not in(
	select distinct c_name from student
);


#查询班级平均入学年龄在30及以上的班级
select c.className as班级, c.headTeacher as 班主任, avg(s.age) as 平均年龄, avg(s.money) as 平均工资
from classes c, student s 
where c.className = s.c_name
group by c.className
having avg(s.age)>30
order by c.className desc



