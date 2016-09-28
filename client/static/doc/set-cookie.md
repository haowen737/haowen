# setCookie

document.cookie 在本地8080端口下正常，但是发布到线上的打包后的版本没有成功的把cookie存进去

是这样写的代码
```
setCookie () {
  let exdate = new Date()
  let expireDays = 10
  exdate.setTime(exdate.getTime() + expireDays * 24 * 3600 * 1000)
  document.cookie = 'newUser=1;expire=' + exdate.toGMTString()
  this.getCookie()
}
```
