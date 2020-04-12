#分页查询 limit
#limit 起始下标，偏移量    起始下标从0开始
select * from employee limit 0,5;

#limit 偏移量  -->表示：从头开始，查询偏移量条数据
select * from employee limit 10;  

#查询id从5到10的记录
select * from employee limit 4,6;

#查询id大于10以后的3个记录
select * from employee where id>10 limit 3;

#第一页：currentPage（当前页）-->0, pageSize-->5(即每页能放5条数据)
select * from employee limit currentPage*pageSize,5

#查询id从10到最后一条记录的所有记录（要表示到最后一条记录，以前可以使用-1这种否定参数，
#但是现在不再适用了，不能使用否定参数，而是用比较大的数即超过范围的数定义偏移量（这里用20），以取到最后一条记录为止）
select * from employee limit 9,20


select * from employee where name like '%王%'

select * from employee 
where name like '%王%'
limit 0,10