# 保存一个canvas图像并且重命名

*Haowen in 2016-11-14*

今天有用到一个二位码转换的库```qr.js```，他把一串url给变成了一个canvas画出来的二维码，然后呢需要把他保存下来，于是我进行了以下操作：
1. 把鼠标移上去
2. 右键```Save as```，目标桌面文件夹
3. 重命名
4. 完成

讲完了

啊不，当然不是这样的

这是导出二维码的函数

    exportQr: function (data) {
      if (data.qrCodeUrl) {
        this.qrCode = qr(data.qrCodeUrl)
        this.drawQr()
        let type = 'png'
        let canvas = document.getElementById('qrCode')
        let imgData = canvas.toDataURL('image/png')

        // 加工image data，替换mime type
        imgData = imgData.replace(this.fixType(type), 'image/octet-stream')

        var filename = data.name + this.$t('z1QrCode.qrCode') + '.' + type
        this.saveFile(imgData, filename)
      } else {
        this.$toast(this.$t('z1QrCode.noQrCode'))
      }
    },

这里用到了```drawQr()``` ```fixType()``` ```saveFile()```

首先，要把一串字符串变成一个可以使用的二维码，```qr.js```帮我做到了将他转化为canvas画布上的像素数据，因此我只要把他画上去就好了

    drawQr: function () {
      let canvas = document.getElementById('qrCode')
      let ctx = canvas.getContext('2d')
      let cells = this.qrCode.modules

      var tileW = 300 / cells.length
      var tileH = 300 / cells.length

      for (var r = 0; r < cells.length; ++r) {
        var row = cells[r]
        for (var c = 0; c < row.length; ++c) {
          ctx.fillStyle = row[c] ? '#000' : '#fff'
          var w = (Math.ceil((c + 1) * tileW) - Math.floor(c * tileW))
          var h = (Math.ceil((r + 1) * tileH) - Math.floor(r * tileH))
          ctx.fillRect(Math.round(c * tileW), Math.round(r * tileH), w, h)
        }
      }
    }

这样子，二维码旧显示在id为qrcode的canvas标签中了

canvas图像要保存下来，一定要有个文件名后缀，文件格式，因此把他的文件类型改好

    fixType: function (type) {
      type = type.toLowerCase().replace(/jpg/i, 'jpeg')
      var r = type.match(/png|jpeg|bmp|gif/)[0]
      return 'image/' + r
    },

接下来就可以保存了，要创建一个saveLink，阿西吧，我还不是很懂这里的这个```createElementNS```

    saveFile: function (data, filename) {
      var saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
      saveLink.href = data
      saveLink.download = filename
      var event = document.createEvent('MouseEvents')
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      saveLink.dispatchEvent(event)
    },
