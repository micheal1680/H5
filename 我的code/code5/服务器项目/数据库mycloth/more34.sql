create database mycloth

create table cloth(
id int primary key auto_increment,
name char(255) not null,
oldprice float default null,
newprice float default null,
stock int,
picture text,
description text,
type char(255) default null
 )