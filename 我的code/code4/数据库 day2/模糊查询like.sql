#模糊查询 like
create table site(
id int primary key auto_increment,
title char(20) not null,
description char(255)
);

create table link(
id int primary key auto_increment,
name char(10),
s_id int
)

#like->模糊查询
#查询以www开头的记录(注：%是指任意数据，'www%'是指：www前没有任何东西，其后面有数据，即以www开头的记录)
select * from link where url like 'www%';

#查询含有百度的记录('%baidu%'是指：只要包含有baidu，无论baidu位置在哪里，都可以查到)
select * from link where url like '%baidu%'

#查询以cn结尾的记录
select * from link where url like '%cn'

#查询id>2的记录中以com结尾的记录
select * from link  where id>2 and url like '%com'

#查询以http开头或者以cn结尾的记录
select * from link where url like 'http%' or url like '%cn'

#查询两张表中的所有记录，并过滤以cn结尾的记录
select site.id,title,description,url
from site,link
where site.id=link.s_id and url like '%cn'

#查询两张表中的所有记录，并对http开头的记录进行分组
select type as 网站类型,count(*) as 数量
from site,link
where site.id=link.s_id and url like 'http%'
group by type


#查询工资高于7000，名字中含有王或者杨的记录
employeecreate table employee(
id int primary key auto_increment,
name char(10),
salary int
);
select *
from employee
where salary>7000 and name like '%王%' or salary>7000 and name like '%杨%'

