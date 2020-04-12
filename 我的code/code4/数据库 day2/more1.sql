create table cake(
id int primary key auto_increment,
name char(255) not null,
description text,
oldprice float default null,
newprice float default null,
activity text,
picture text,
type char(255) default null
)