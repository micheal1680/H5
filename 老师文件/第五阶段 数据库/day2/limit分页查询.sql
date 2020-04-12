#分页查询limit
#limit 起始下标, 偏移量       起始下标从0开始
select * from employee limit 0, 5;

#limit 偏移量 -->从头开始，查询偏移量条数据
select * from employee limit 10;

#查询id从15到20的记录
select * from employee limit 14, 6;

select * from employee where id > 10 limit 10;

#第一页：currentPage-->0, pageSize-->48
select * from employee limit  currentPage*pageSize, 48


select * from shop where kw like "%羽绒服%"

select * from shop
where kw like "%羽绒服%" 
limit 0, 100
