# Hello World
*Haowen in 2016-9-22*

這是新博客的第一篇文章。

```
Hello Word！
```

現在這個博客沒有后台，雖然有用koa，但是后台沒什麽東西，一切都是在前端完成的，使用了

* vue
* markdown.js
* github-markdown.css

所有markdown筆記都在status的doc文件夾下，因爲衹有前端，因此每次寫完新的文章后都需要前往'client/database.js'中更新數據。

code首頁的目錄就是從database文件中讀取的。

目前博客還衹有最最基礎的功能，還有許多地方需要完善。

目前還需要解決的問題：

1. 需要手動輸入時間
2. 需要手動更新database文件
3. 沒有翻頁
4. 沒有圖片預覽
5. 缺少個人信息頁面
6. 設想查看個人信息頁面，不用跳轉頁面
7. modal组件的函数问题
8. 自动更新database文件可以通过在webpack打包的时候读取文件，并自动生产一个json文件，需要看一下怎么做

Keep it up!

Live a life you will remember!
