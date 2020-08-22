create database `database_name` -- taofileexcel
create table(
	id int(10),
	name nvarchar(0),
	`table` int(10),
	diem float,
	gender boolean,
)

insert into `ten bang`(id,name) values(123, n'thu') -- chen
select id,name as hoten,diem from `table_name` -- lay thong tin
where id=123
-- update
update `table`
set diemtoan = 3
where id=123
update `table`(id,name)
where diemvan > 5 and diemtoan < 3
values (456)
-- delete
delete from `table_name`
where id=123
