## 从购买服务器开始－配置shadowsocks
*Haowen in 2016-12-22*

那么，我们从购买服务器开始说起吧

服务器的选择有许多种，搬瓦工，Digital Ocean，国外的主机都相对比较便宜，我在这里选择的是Vultr，5美元一个月，单核725M的内存，带宽1000M，这个配置相对于国内绝大多数的云服务器来说是相当便宜的。

ps: 目前vultr新注册的用户在充值账户时有充值多少送多少的活动，最高上限是充值500美元送500美元。（仅供参考，不是打广告）

每一个运营商提供的服务器都有不一样的地方，比如digital ocean的老牌稳定，搬瓦工的价格低廉，vultr的高性价比等等，具体的分析可以去知乎上搜索一下专业一点的人的评价。

至于由于服务器在国外而引起的ping值过高的缺点，都可以解决，在这里我选择的是serverSpeeder, 国内也有一款（）较为知名，但是从十月份开始就停止注册了，使用这一类服务给你的服务器加速，至少可以达到youtube视频720p不卡，他只有一个缺点，就是会成倍的消耗你的流量，但是就拿笔者5美元一个月的服务器来说，有1000G的流量，这些都算不上什么事。

干货就从下面开始吧：

1. 首先从购买服务器开始吧，就拿笔者使用的vultr来举例吧
《详细流程 plus支付》

2. 购买完成后就开始连接吧，不用装什么，就用电脑自带的shell就行了，以下举例在mac环境下

* 打开终端，建立ssh连接，

    ssh 45.32.64.136@root

之后会要求你输入密码，初始密码能在你购买的服务器的供应商的管理后台看到，输入密码，我们就进入了你刚刚购买的服务器了，如果觉得这样有点麻烦，就看[ssh config](www.baidu.com)吧，会帮到你的～

然后我们下载一个shadowsocks，

``` wget --no-check-certificate https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-go.sh```

```chmod +x shadowsocks-go.sh```

```./shadowsocks-go.sh 2>&1 | tee shadowsocks-go.log```

然后就能看到成功的提示：

TODO／／／／／／

然后我们载个加速的东西

```wget -N --no-check-certificate https://raw.githubusercontent.com/91yun/serverspeeder/master/serverspeeder-all.sh && bash serverspeeder-all.sh```

这里已经下载并运行了～可以输入```service serverSpeeder status ```来查看目前serverSpeeder的运行状态

服务器端的配置就到这里差不多了，接下来在你的客户端，也就是你的电脑上下载个shadowsocks就可以看到墙外的世界了
