create table site(
	id int primary key auto_increment,
	title char(20) not null,
	description char(255)
)

create table link(
	id int primary key auto_increment,
	url char(255),
	s_id int
)

#like-->模糊查询
#查询以www开头的记录
select * from link where url like "www%"

#查询中间有百度的记录
select * from link where url like "%baidu%"

#查询以cn结尾的记录
select * from link where url like "%cn"

#查询id>2的记录中以com结尾的记录
select * from link where id > 2 and url like "%com"

#查询以http开头或者以cn结尾的记录
select * from link where url like "http%" or url like "%cn";

#查询两张表中的所有记录，并过滤以cn结尾的记录
select site.id, title, url, description 
from site, link 
where site.id = link.s_id and url like "%cn"

#查询两张表的所有记录，并对http开头的记录进行分组
select type, count(*) 
from site, link
where site.id = link.s_id and url like "http%"
group by type


#查询工资高于7000，名字中含有王或者杨的记录
select *
from employee 
where salary > 7000 and name like "%王%" or name like "%杨%"





