## Centos7开放端口
*Haowen in 2016-12-22*

经常忘记firewall的命令，下面记录如何使用firewalld开放Linux端口：

开启端口
```firewall-cmd --zone=public --add-port=80/tcp --permanent```
命令含义：
```--zone #作用域```
```--add-port=80/tcp #添加端口，格式为：端口/通讯协议```
```--permanent #永久生效，没有此参数重启后失效```
重启防火墙
```firewall-cmd --reload```
详细信息可以参考以下资料：
http://stackoverflow.com/questions/24729024/centos-7-open-firewall-port
https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Security_Guide/sec-Using_Firewalls.html
