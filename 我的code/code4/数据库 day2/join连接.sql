#内连接：查询两张表中都有的记录，即结果为交集(进行内连接的两张表的位置可以交换，即link inner join site 也可以，结果一样)
select site.id,site.title,site.description,link.url
from site inner join link on site.id=link.s_id; 
#等价于
select site.id,site.title,site.description,link.url
from site,link
where site.id=link.s_id

#左连接：左表的字段全显示，右表对应的显示，没有的显示为null
select site.id,site.title,site.description,link.url
from site left join link on site.id=link.s_id;

#右连接:右表的字段全显示，左表对应的显示，没有的显示为null
select site.id,site.title,site.description,link.url
from site right join link on site.id=link.s_id;

#全连接（full join）：通过"左连接 union 右连接"实现。（MySQL不支持full join）(结果：两张表的并集)
select * from site left join link on site.id=link.s_id
union 
select * from site right join link on site.id=link.s_id