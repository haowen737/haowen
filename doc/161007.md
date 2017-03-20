# 做了一个滚动条
*Haowen in 2016-10-07*

今天做了一个放在顶部的滚动条，把浏览器自带的替换掉了，遇到一些问题：

主要在chrome中使用，因此用

    /*滚动条*/
    ::-webkit-scrollbar {
      width: 0px;
      background-color: rgba(0,0,0,0);
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0,0,0);
    }

把chrome中的滚动条设置为透明，觉得不彻底，因为除了code页面，大部分的页面时不需要滚动条的，所以从tag页面跳转至code页面时会因为突然出现的滚动条而使得原本居中的页面整体向右移，于是将他的width设为了0。

firefox和ie目前在看资料，好像不能设置的像chrome那么自由。只查询到color的css。

将边上的滚动条去掉之后，该设置自己理想的滚动条了：

使用了

    <div class="top-scrollbar" :style="topScrollbarWidth"></div>

    .top-scrollbar {
      position: fixed;
      background-color: #000;
      top: 0;
      height: 2px;
    }

标签来定义了一个高为2px的，位于页面顶端的滚动条。

后来

    scrollWatcher () {
      this.$nextTick(function () {
        window.onscroll = () => {
          let offsetHeight = document.getElementById('container').offsetHeight
          let innerHeight = window.innerHeight
          let scrollY = window.scrollY
          // 160为cards的margin-bottom
          this.topScrollbarWidth.width = (scrollY / (offsetHeight + 160 - innerHeight)) * 100 + '%'
          if ((innerHeight + scrollY) - offsetHeight > 70) {
            this.showBottomFire = true
          } else {
            this.showBottomFire = false
          }
        }
      })
    }

这里在写的时候，又把offsetHeight， innerHeight, scrollY, scrollTop等等的属性弄混淆了。

因此在这里做一下笔记：

offsetWidth=(border-width)*2+(padding-left)+(width)+(padding-right)

offsetHeight=(border-width)*2+(padding-top)+(height)+(padding-bottom)

innerheight 返回窗口的文档显示区的高度
