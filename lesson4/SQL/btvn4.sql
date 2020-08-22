use btvn;

DROP TABLE IF EXISTS `khachhang`;
CREATE TABLE `khachhang`
(
    `makh` nvarchar(10) primary key,
    `hoten` nvarchar(100),
    `sodienthoai` nvarchar(100)
    );
    
DROP TABLE IF EXISTS `nhachothue`;

CREATE TABLE `nhachothue`
(
    `manha` nvarchar(10),
    `diachi` nvarchar(100),
    `giathue` nvarchar(100),
    `tenchunha` nvarchar(100)
    );
    DROP TABLE IF EXISTS `hopdong`;

CREATE TABLE `hopdong`
(
    `manha` nvarchar(10),
    `makh` nvarchar(100),
    `ngaybatdau` nvarchar(100),
    `ngayketthu` nvarchar(100)
    );
    -- a
select diachi,tenchunha
from nhachothue 
where giathue <10000;
    -- b
select distinct K.makh,K.hoten,N.tenchunha -- distinct la tu khoa chen truoc select neu query xong dam bao k trung lap
from khachhang as K
inner join hopdong as H on K.makh = K.makh
inner join nhachothue as N on N.manha=H.manha
where N.tenchunha = 'Nong Van Den';
-- inner join kieu outer join //null/null
-- left
-- c
select *
from nhachothue as N
where manha not in(select manha from hopdong);
-- not in, not exists
 -- d
 select max(giathue)
 from hopdong as H inner join nhachothue as n on H.manha=N.manha;
 
 -- select max(giathue)
 -- from nhachothue
 -- where manha exists in (
 -- select manha from hopdong)
 
 -- bai 2
 
   DROP TABLE IF EXISTS `khachsan`;

CREATE TABLE `khachsan`
(
    `maks` nvarchar(10),
    `tenkhachsan` nvarchar(100),
    `diachi` nvarchar(100)
    );  
     DROP TABLE IF EXISTS `phong`;

CREATE TABLE `phong`
(
    `sophong` nvarchar(10),
    `maks` nvarchar(100),
    `loaiphong` nvarchar(100),
    `gia` nvarchar(100)
    );
     DROP TABLE IF EXISTS `datphong`;

CREATE TABLE `datphong`
(
    `maks` nvarchar(10),
    `makh` nvarchar(100),
    `ngaynhan` nvarchar(100),
    `ngaytra` nvarchar(100),
    `sophong` nvarchar(100)
    );
    DROP TABLE IF EXISTS `khach`;

CREATE TABLE `khach`
(
    `makh` nvarchar(10),
    `hoten` nvarchar(100),
    `diachi` nvarchar(100)
    );
    
  
    -- a
    select `loaiphong`,`gia`
    from `khachsan` as K 
    inner join `phong` as P on K.maks = P.maks
    where K.tenkhachsan = 'Melia';
    
    -- b
    select `makh`,`hoten`
    from `khachsan` as KS 
    
    inner join `datphong` as D on D.maks=KS.maks
    inner join `khach` as K on K.makh=D.makh
    where KS.tenkhachsan = 'Melia';
    
    -- c
    select `sophong`,`loaiphong`,`gia`,`hoten`
    from `khachsan` as KS
    
    inner join `phong` as P on P.maks = KS.maks
    inner join `datphong` as D on D.maks=KS.maks
    inner join `khach` as K on K.makh=D.makh
    
	where KS.tenkhachsan = 'Melia'
    and exists(select sophong from khach);
    
    -- d
    select `sophong`,`loaiphong`,`gia`
    from `khachsan` as KS
    
    inner join `datphong` as D on D.maks=KS.maks
	where KS.tenkhachsan = 'Melia'
    and sophong not in(select sophong from datphong);
    
    -- e 
    select count(`sophong`)
    from `khachsan` as KS
	inner join `phong` as P on KS.maks=P.maks
	where D.diachi = 'London';
    
    -- f
	update `phong`
    set gia = gia * 1.05
    where loaiphong = 'phongdon';
    
    
    
    
	
    