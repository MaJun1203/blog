---

data: 2024-11-22
catagory:
  - 数据库
---

## SQL

### SQL通用语法

- SQL可以单行或多行书写，以分号结尾

- MySQL数据库的SQL语句不区分大小写，关键字建议大写

- 注释：

  1.单行注释：-- 注释内容或#注释内容（MySQL特有）

  2.多行注释：/* 注释内容 */

### SQL语句分类

- DDL：Data Definition Language

​		数据定义语言，用来定义数据库对象（数据库，表，字段）。

- DML：Data Manipulation Language

​		数据操作语言，用来对数据库表中的数据进行增删改。

- DQL：Data Query Language

​		数据查询语言，用来查询数据库中表的记录。

- DCL：Data Control Language

​		数据控制语言，用来创建数据库用户、控制数据库的访问权限。

### DDL

- DDL-数据库操作

  查询：

  ```sql
  SHOW DATABASES;#查询所有数据库
  SELECT DATABASE();#查询当前数据库
  ```

  创建：

  ```sql
  CREATE DATABASE [IF NOT EXISTS] 数据库名[DEFAULT CHARSET]字符集[COLLATE 排序规则]；
  ```

  删除：

  ```sql
  DROP DATABASE[IF EXISTS]数据库名；
  ```

  使用：

  ```sql
  USE数据库名;
  ```

- DDL-表操作-查询

  查询当前数据库所有表

  ```sql
  SHOW TABLES;
  ```

  查询表结构

  ```sql
  DESC表名;
  ```

  查询指定表的建表语句

  ```sql
  SHOW CREATE TABLE表名;
  ```

- DDL-表操作-创建

  ```sql
  CREATE TABLE 表名(
      字段1 字段1类型[COMMENT 字段1注释]，
      字段2 字段2类型[COMMENT 字段2注释]，
  	字段3 字段3类型[COMMENT 字段3注释]
  	字段n 字段n类型[COMMENT 字段n注释])[COMMENT 表注释];
  ```

- DDL-表操作-数据类型

​		MySQL中的数据类型有很多，主要分为三类：数值类型、字符串类型、日期时间类型。

![数值类型](/articleImages/MySQL/MySQL1.png)

![字符串类型](/articleImages/MySQL/MySQL2.png)

![日期时间类型](/articleImages/MySQL/MySQL3.png)

- DDL-表操作-修改

  添加字段

  ```sql
  ALTER TABLE 表名 ADD 字段名 类型（长度）[COMMENT注释][约束];
  ```

  修改数据类型

  ```sql
  ALTER TABLE 表名 MODIFY 字段名 新数据类型（长度）;
  ```

  修改字段名和字段类型

  ```sql
  ALTER TABLE 表名 CHANGE 旧字段名 新字段名 类型（长度）[COMMENT 注释][约束];
  ```

  删除字段

  ```sql
  ALTER TABLE 表名 DROP 字段名;
  ```

  修改表名

  ```sql
  ALTER TABLE 表名 RENAME TO 新表名;
  ```

- DDL-表操作-删除

  删除表

  ```sql
  DROP TABLE [IF EXISTS]表名;
  ```

  删除指定表，并重新创建该表

  ```sql
  TRUNCATE TABLE 表名;
  ```

  

### DML

- DML-添加数据

  给指定字段添加数据

  ```sql
  INSERT INTO 表名（字段名1，字段名2..） VALUES（值1，值2..);
  ```

  给全部字段添加数据

  ```sql
  INSERT INTO 表名 VALUES（值1，值2，...）;
  ```

  批量添加数据

  ```sql
  INSERT INTO 表名（字段名1，字段名2) VALUES(值1,值2,...),(值1,值2,...);
  INSERT INTO 表名 VALUES(值1,值2,...),(值1,值2,...);
  ```

- DML-修改数据

  ```sql
  UPDATE 表名 SET 字段名1 = 值1，字段名2 = 值2，...[WHERE 条件];
  ```

- DML-删除数据

  ```sql
  DELETE FROM 表名[WHERE 条件];
  ```

  

### DQL 

- DQL-基本查询

  查询多个字段

  ```sql
  SELECT 字段1,字段2,字段3...FROM 表名;
  SELECT * FROM 表名;
  ```

  设置别名

  ```sql
  SELECT 字段1[AS 别名1],字段2[AS 别名2]...FROM 表名;
  ```

  去除重复记录

  ```sql
  SELECT DISTINCT 字段列表 FROM 表名;
  ```

- DQL-条件查询

  ```sql
  SELECT 字段列表 FROM 表名 WHERE条件列表;
  ```

- DQL-聚合函数

  将一列数据作为一个整体，进行纵向计算

  常见聚合函数

  - count 统计数量
  - max 最大值
  - min 最小值
  - avg 平均值
  - sum 求和

- DQL-分组查询

  ```sql
  SELECT 字段列表 FROM 表名 [WHERE 条件] GROUP BY 分组字段名 [HAVING 分组后过滤条件]
  ```

  where与having区别

  1.执行时机不同：where是分组之前进行过滤，不满足where条件，不参与分组；而having是分组之后对结果进行过滤。

  2.判断条件不同：where不能对聚合函数进行判断，而having可以。

- DQL-排序查询

  ```sql
  SELECT 字段列表 FROM 表名 ORDER BY 字段1 排序方式1, 字段2 排序方式2;
  ```

  排序方式：

  ASC：升序（默认值）

  DESC：降序

- DQL-分页查询

  ```sql
  SELECT 字段列表 FROM 表名 LIMIT起始索引, 查询记录数;
  ```

- DQL-执行顺序

  编写顺序：SELECT、FROM、WHERE、GROUP BY、HAVING、ORDER BY、LIMIT

   执行顺序：FROM、WHERE、GROUP BY、HAVING、SELECT、ORDER BY、LIMIT

### DCL

- DCL-管理用户

  查询用户

  ```sql
  USE mysql;
  SELECT * FROM user;
  ```

  创建用户

  ```sql
  CREATE USER '用户名'@'主机名' IDENTIFIED BY '密码';
  ```

  修改用户密码

  ```sql
  ALTER USER '用户名'@'主机名' IDENTIFIED WITH mysql_native_password BY '新密码';
  ```

  删除用户

  ```sql
  DROP USER '用户名'@'主机名';
  ```

- DCL-权限控制

  MySQL中定义了很多种权限，但是常用的就以下几种：

  ALL，ALL PRIVIEGES 所有权限

  SELECT                         查询数据

  INSERT						 插入数据

  UPDATE						修改数据

  DELETE						  删除数据

  ALTER							修改表

  DROP							 删除数据库/表/视图

  CREATE						  创建数据库/表

查询权限

```sql
SHOW GRANTS FOR '用户名'@'主机名';
```

授予权限

```sql
GRANT 权限列表 ON 数据库名.表名 TO '用户名'@'主机名';
```

撤销权限

```sql
REVOKE 权限列表 ON 数据库名.表名 FROM '用户名'@'主机名';
```

## 函数

是指一段可以直接被另一段程序调用的程序或代码。

### 字符串函数

CONCAT(S1,S2,...Sn)字符串拼接，将n个字符串拼接成一个字符串

LOWER(str)将字符串全部转为小写

UPPER(str)将字符串全部转为大写

LPAD(str,n,pad)左填充，用字符串pad对str的左边进行填充，达到n个字符串长度

RPAD(str,n,pad)右填充，用字符串pad对str的右边进行填充，达到n个字符串长度

TRIM(str)去掉字符串头部和尾部的空格

SUBSTRING(str,start,len)返回从字符串str从start位置起的len个长度的字符串

### 数值函数

CEIL(x)			 向上取整

FLOOR(x)		向下取整

MOD(x,y)		 返回x%y（模运算）

RAND()			 返回0~1内的随机数

ROUND(x,y)	  求参数x的四舍五入的值，保留y位小数

### 日期函数

CURDATE()															返回当前日期

CURTIME()															 返回当前时间

NOW()																	 返回当前日期和时间

YEAR(date)															 获取指定date的年份

MONTH(date)														获取指定date的月份

DAY(date)																获取指定date的日期

DATE_ADD(date,INTERVAL expr type)				返回一个日期/时间值加上一个时间间隔expr后的时间值

DATEDIFF(date1,date2)										 返回起始时间date1和结束时间date2之间的天数（date1-date2）

### 流程函数

IF(value,t,f)		如果value为true，特返回t，否则返回f

IFNULL(value1,value2)		如果value1不为空，返回value1，否则返回value2

CASE WHEN [val1] THEN [res1] ... ELSE [default] END		如果val1为true，返回res1，...否则返回default默认值

CASE [expr] WHEN [val1] THEN [res1] ... ELSE [default] END		如果expr的值等于val1，返回res1，...否则返回default默认值

## 约束

概念：约束是作用于表中字段上的规则，用于限制存储在表中的数据。

目的：保证数据库中数据的正确、有效性和完整性。

|   约束   | 描述                                                     | 关键字      |
| :------: | -------------------------------------------------------- | ----------- |
| 非空约束 | 限制该字段的数据不能为null                               | NOT NULL    |
| 唯一约束 | 保证该字段的所有数据都是唯一、不重复的                   | UNIQUE      |
| 主键约束 | 主键是一行数据的唯一标识，要求非空且唯一                 | PRIMARY KEY |
| 默认约束 | 保存数据时，如果未指定该字段的值，则采用默认值           | DEFAULT     |
| 检查约束 | 保证字段值满足某一个条件                                 | CHECK       |
| 外键约束 | 用来让两张表的数据之间建立连接，保证数据的一致性和完整性 | FOREIGN KEY |

对于一个字段来说，我们可以添加多个约束

### 外键约束

外键用来让两张表的数据之间建立连接，从而保证数据的一致性和完整性。

例如员工表有一个字段是所属部门编号，比如张三属于3号部门，还有一张部门表，3号对应研发部。所以员工表和部门表之间应建立联系，员工表是子表，部门表是父表。

- 添加外键

  ```sql
  CREATE TABLE表名(
  	字段名 数据类型,
      ...
      [CONSTRAINT][外键名称] FOREIGN KEY(外键字段名) REFERENCES 主表(主表列名)
  );
  ```

  ```sql
  ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY(外键字段名) REFERENCES 主表(主表列名);
  ```

  

- 删除外键

  ```sql
  ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;
  ```

  

- 删除/更新行为

  | 行为        | 说明                                                         |
  | ----------- | ------------------------------------------------------------ |
  | NO ACTION   | 当在父类中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不允许删除/更新。与(RESTRICT)一致 |
  | RESTRICT    | 当在父类中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不允许删除/更新。与(NO ACTION)一致 |
  | CASCADE     | 当在父类中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则也删除/更新外键在子表中的记录 |
  | SET NULL    | 当在父类中删除对应记录时，首先检查该记录是否有对应外键，如果有则设置子表中该外键值为null(这就要求该外键允许取null) |
  | SET DEFAULT | 父表有变更时，子表将外键列设置成一个默认的值(Innodb不支持)   |

  ```sql
  ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY(外键字段名) REFERENCES 主表(主表列名) ON UPDATE CASCADE ON DELETE CASCADE;
  ```

  表示更新时执行什么行为，删除时执行什么行为

## 多表查询

### 多表关系

由于业务之间相互关联，所以各个表结构也存在着各种关系，基本上分三种：

- 一对多（多对一）

  例如：部门和员工的关系

  实现：在多的一方建立外键，指向一的一方的主键

- 多对多

  例如：学生与课程的关系

  实现：建立第三张中间表，中间表至少包含两个外键，分别关联双方主键

- 一对一

  例如：用户与用户详情的关系

  在任意一方加入外键，关联另一方的主键，并且设置为唯一的(UNIQUE)

### 多表查询概述

- 概述：指从多表中查询数据
- 笛卡尔积：笛卡尔乘积是指在数学中，两个集合A和集合B的所有组合情况。（在多表查询时，需要消除无效的笛卡尔积）

- 多表查询分类

  - 连接查询：

    - 内连接：相当于查询A、B交集部分数据

    - 外连接：

      左外连接：查询**左表**所有数据，以及两张表交集部分数据

      右外连接：查询**右表**所有数据，以及两张表交集部分数据

    - 自连接：当前表与自身的连接查询，自连接必须使用表别名

  - 子查询

### 内连接

内连接查询语法：

- 隐式内连接

  ```sql
  SELECT 字段列表 FROM 表1,表2 WHERE 条件...;
  ```

  

- 显式内连接

  ```sql
  SELECT 字段列表 FROM 表1 [INNER] JOIN 表2 ON 连接条件...;
  ```

  

### 外连接

外连接查询语法：

- 左外连接

  ```sql
  SELECT 字段列表 FROM 表1 LEFT [OUTER] JOIN 表2 ON 条件...;
  ```

  相当于查询表1（左表）的所有数据 包含 表1和表2交集部分的数据

- 右外连接

  ```sql
  SELECT 字段列表 FROM 表1 RIGHT [OUTER] JOIN 表2 ON 条件...;
  ```

  相当于查询表2（右表）的所有数据 包含 表1和表2交集部分的数据

- 自连接

  自连接查询语法

  ```sql
  SELECT 字段列表 FROM 表A JOIN 表A 别名B ON 条件...;
  ```

  自连接查询，可以是内连接查询，也可以是外连接查询。

### 联合查询-union,union all

对于union查询，就是把多次查询的结果合并起来，形成一个新的结果查询集。

```sql
SELECT 字段列表 FROM 表A...
UNION [ALL]
SELECT 字段列表 FROM 表B...;
```

对于联合查询的多张表的列数必须保持一致，字段类型也需要保持一致。

union all会将所有的数值全部合并在一起，union会进行去重。

### 子查询

- 概念：SQL语句中嵌套SELECT语句，称为嵌套查询，又称子查询。

  ```sql
  SELECT * FROM t1 WHERE column1 = (SELECT column1 FROM t2)
  ```

  子查询外部的语句可以是INSERT/UPDATE/DELETE/SELECT中的任何一个。

- 根据子查询结果不同，分为：

  - 标量子查询（子查询结果为单个值）

    常用操作符：>、<、=、<=、>=

  - 列子查询（子查询结果为一列）

    常用操作符：IN、NOT、IN、ANY、SOME、ALL

    | 操作符 | 描述                                   |
    | ------ | -------------------------------------- |
    | IN     | 在指定的集合范围之内，多选一           |
    | NOT IN | 不在指定的集合范围之内                 |
    | ANY    | 子查询返回列表中，有任意一个满足即可   |
    | SOME   | 与ANY等同，使用SOME的地方都可以使用ANY |
    | ALL    | 子查询返回列表的所有值必须满足         |

  - 行子查询（子查询结果为一行）

    常用的操作符：=、<>、IN、NOT IN

  - 表子查询（子查询结果为多行多列）

    常用的操作符：IN

- 根据子查询位置，分为：WHERE之后、FROM之后、SELECT之后

## 事务

### 事务简介

**事务**是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。

## 事务操作

- 查看/设置事务的提交方式

  ```sql
  SELECT @@autocommit;
  SET @@autocommit = 0;
  ```

  如果为1，表示自动提交。

- 提交事务

  ```sql
  COMMIT;
  ```

- 回滚事务

  ```sql
  ROLLBACK;
  ```



第二种方式

- 开启事务

  ```sql
  START TRANSACTION 或 BEGIN;
  ```

- 提交事务

  ```sql
  COMMIT;
  ```

- 回滚事务

  ```sql
  ROLLBACK;
  ```

### 事务的四大特性（ACID）

- 原子性(Atomicity)：事务是不可分割的最小操作单元，要么全部成功，要么全部失败。
- 一致性(Consistency)：事务完成时，必须使所有的数据都保持一致状态。
- 隔离性(Isolation)：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行。
- 持久性(Durability)：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的。

### 并发事务问题

| 问题       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| 脏读       | 一个事务读到另一个事务还没有提交的数据                       |
| 不可重复读 | 一个事务先后读到同一条数据，但两次读取的数据不同，称之为不可重复读 |
| 幻读       | 一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据已经存在，好像出现了“幻影”。 |

### 事务隔离级别

| 隔离级别              | 脏读 | 不可重复读 | 幻读 |
| --------------------- | ---- | ---------- | ---- |
| Read uncommitted      | √    | √          | √    |
| Read commited         | ×    | √          | √    |
| Repeatable Read(默认) | ×    | ×          | √    |
| Serializable          | ×    | ×          | ×    |

```sql
--查看事务隔离级别
SELECT @@TRANSACTION_ISOLATION

--设置事务隔离级别
SET [SESSION | GLOBAL] TRANSACTION ISOLATION LEVEL (READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE)
```

