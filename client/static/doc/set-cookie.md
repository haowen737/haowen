# 这个博客用到的Cookie的存储和读取

document.cookie 在本地8080端口下正常，但是发布到线上的打包后的版本没有成功的把cookie存进去

是这样写的代码

expireDays表示cookie的有效期，exdate为存入cookie的过期时间

    setCookie () {
      // cookie有效期为1天，失效后進入photo頁面會有提示彈出
      // newUser = 0 表示为初次见面用户
      let exdate = new Date()
      let expireDays = 1
      exdate.setTime(exdate.getTime() + expireDays * 24 * 3600 * 1000)
      document.cookie = 'newUser=10'
      document.cookie = 'expire=' + exdate.toGMTString()
    },

由于是固定只存了newUser和expire时间，因此在取的时候知道他们的位置，所以取出newUser的时候是这样写的

    getCookie () {
      let cookies = document.cookie.split('; ')
      let user = cookies[0].split('=')[1]
      console.log(user)
      if (user === 1) {
        this.showModal = true
        this.helloText = '哈！又见面了'
      } else {
        this.showModal = true
        this.helloText = '初次见面，你好啊'
        this.setCookie()
      }
    }

好像是生效的...没有不成功，眼瞎。。。
