#查询country表中的所有记录，所有字段   *表示所有字段，没有where条件表示所有记录
select * from a_country;
#查询所有记录的name字段
select name from a_country;
#查询指定记录的name字段
select name from a_country where id=1;

#查询两张表中的所有数据，是一个笛卡尔积
select * from a_country, a_president;

#查询两张表中的所有数据，并过滤了笛卡尔积
select * from a_country, a_president where a_country.id=a_president.f_country_id;


#查询两张表中的指定字段，并过滤了笛卡尔积
select con.id, con.name, con.language, pre.name, pre.sex 
from a_country con, a_president pre 
where con.id=pre.f_country_id;
#a_country con, a_president pre 是指：将a_country换成con，a_president换成pre，为了方便书写
