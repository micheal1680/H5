#插入数据，使用insert
#字段名称与值要一一对应
insert into people(id, name, sex, age, address) 
	values(1, '张三', '男', 20, '成都市武侯区科华北路');

insert into people(name, sex, age, address) 
	values('李四', '男', 18, '武侯区磨子桥');

insert into people(name, age, address, sex)
	values('薛宝钗', 16, '红楼梦', '女');

#如果插入数据时没有指定字段，那么需要添加所有字段的值，并且按顺序添加
insert into people values(10, '孙悟空', '男', 500, '花果山水帘洞');


#修改数据，使用update
#set表示设置字段的新值，where表示修改哪一条记录
#where之后可以使用=、>、<、and(交集)、or(并集)、in、not in
update people set name='王5' where id=3;
update people set name='王小二', sex='女', age=5 where id=4;
update people set age=20 where id<3;
update people set address="上海" where id>5;
update people set name='小花' where id>5 and id<8;
update people set address='北京' where id<3 or id>8;
update people set sex='女' where id in(2,4,6,8);
update people set age='22' where id not in(1,2,3,7,8,9);

#删除数据，使用delete
delete from people where name='李四' and address='上海';
delete from people where id=1;
delete from people where name='王5' or address='北京' or id=17;







