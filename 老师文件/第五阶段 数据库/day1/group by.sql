#group by表示分组查询，并且统计每一组的人数，通过count(*)表示
select  sex as 性别,  count(*) as 人数
from people
group by sex;

#通过where过滤条件，然后再进行分组
select sex as 性别, count(*) as 人数
from people 
where id > 10 
group by sex;

#当使用group by查询时，那么select与from之间只能使用能代表整个组信息的字段，（这里是通过sex来分的，因此只有sex才能代表整个组的信息，name等就不可以）
#max取一组中某个字段的最大值，min最小值，sum求和，avg平均值，而这些都是可以使用的
select sex as 性别, count(*) as 人数, max(age), min(age), sum(age), avg(age)
from people 
group by sex;

