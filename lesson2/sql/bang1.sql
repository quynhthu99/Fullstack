drop table if exists `product`;
drop table if exists `category`;
drop table if exists `user`;
drop table if exists `order`;
drop table if exists `orderDetail`;
-- sua bang alter table -- google.com
create table `product`(
	productId nvarchar(10) primary key,
	-- dung nvarchar co dinh duoc do dai
    displayName nvarchar(50),
    priceIn int,
    priceOut int,
    amount int,
    provider nvarchar(100),
    category nvarchar(10),
    salePercent int,
    salePrice int,
    imageURL nvarchar(100)
);
-- Error len ESlint

create table `category`(
	categoryId nvarchar(10) primary key,
    displayName nvarchar(100),
    imageURL nvarchar(100)
);
create table `user`(
	`userId` nvarchar(10) primary key,
	`displayName` nvarchar(100),
    `email` nvarchar(100),
    `phone` nvarchar(100),
    `userName` nvarchar(100),
    `password` nvarchar(100),
    `birthday` date,
    `status` int,
    `avatar` nvarchar(100),
    `role` int
);
create table `order`(
	`orderId` nvarchar(10) primary key,
	`userId` nvarchar(10), -- syntax
	 -- `productId` nvarchar(10), -- [p1,p2,p3]
    `price` int,
    `ship` int,
    `status` nvarchar(100)
);    
create table `orderDetail`(
	`orderId` nvarchar(10),
    `productId` nvarchar(10),
    `quantity` int,
    `price` int
);
INSERT INTO product VALUES(01,'NAM',1000,500,1,'THU','HOINGU',50,250,'https://2.bp.blogspot.com/-hZqFkNjxxkQ/UbqN4w4HF2I/AAAAAAAABdI/SU0RTS5QJBk/s1600/cho.jpg');
	SET SQL_SAFE_UPDATES = 0;
UPDATE product SET  salePercent =100,salePrice =500;
DELETE FROM product WHERE productId = 100;

INSERT INTO category VALUES(01,'THU','https://2.bp.blogspot.com/-hZqFkNjxxkQ/UbqN4w4HF2I/AAAAAAAABdI/SU0RTS5QJBk/s1600/cho.jpg');
     
    -- SET SQL_SAFE_UPDATES = 0;
UPDATE category SET  categoryId =100;
DELETE FROM category WHERE categoryId = 100;

INSERT INTO `user` VALUES(01,'THU','quynhthuluong@gmail.com',0366302882,'quynhthu_99',123456,04/09/1999,1,'khongco',01);
UPDATE `user` SET  userId =100;
DELETE FROM `user` WHERE userId = 100;

INSERT INTO `order` VALUES(01,10,10,20,'daHuy');
UPDATE `order` SET  orderId =0;
DELETE FROM `order` WHERE orderId = 0;

INSERT INTO `orderDetail` VALUES(01,10,10,20);
UPDATE `orderDetail` SET  orderId =0;
DELETE FROM `orderDetail` WHERE orderId = 0;
