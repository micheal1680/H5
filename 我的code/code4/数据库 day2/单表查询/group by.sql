#分组查询
select type as 性别,count(*) as 人数,max(score) as 最高分,min(score) as 最低分, sum(score) as 总分, avg(score) as 平均分
from stu
where id>2
#先满足条件过滤之后再进行分组
group by type
#分组之后再进行再过滤，即having必须得在group by之后
having count(*)>2


select name,count(*) as 人数,avg(score) as 平均分
from stu
#where条件进行过滤
where id>1
#where条件过滤之后再进行分组
group by name
#group by之后才可以使用having
having count(*)>1
#利用order by进行升序排序（asc:升序，不写时默认为升序，desc:降序）
order by avg(score) desc

#扩展，通过score将整张表进行降序排序
select * from stu order by score desc