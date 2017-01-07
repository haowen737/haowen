## 初学 mysql 历险记
*Haowen in 2017-01-07*

插入中文时出现

    mysql> insert into students values(NULL, "王刚", "13811371377");
    ERROR 1366 (HY000): Incorrect string value: '\xE7\x8E\x8B\xE5\x88\x9A' for column 'name' at row 1
