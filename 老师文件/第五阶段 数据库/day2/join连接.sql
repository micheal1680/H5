#内连接：查询两张表中都匹配的记录，交集
select site.id, site.title, site.description, link.url
from link inner join site on site.id = link.s_id;

#等价于
select site.id, site.title, site.description, link.url
from site, link
where site.id = link.s_id

#左连接：左表的字段全显示，右表对应的显示，没有的显示为null
select site.id, site.title, site.description, link.url
from site left join link on site.id = link.s_id;

#右连接：右边的字段全显示，左表对应的显示，没有的显示为null
select site.id, site.title, site.description, site.type, link.url
from site right join link on site.id = link.s_id;


#MySQL不支持full join
#通过 “左连接 union 右连接”实现全连接 full join
select * from site left join link on site.id = link.s_id
union
select * from site right join link on site.id = link.s_id
