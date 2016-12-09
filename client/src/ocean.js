function ocean (word) {
  let u = word.toString()
  let res = '啊呃。。。智商有限。。。听不懂你在说什么'
  if (u.indexOf('蠢') !== -1 || u.indexOf('呆') !== -1) {
    res = '呵 愚蠢的人类。。。'
    return res
  }
  if (u.indexOf('天气') !== -1) {
    res = '嗯！今天天气不错，心情也超棒！'
    return res
  }
  if (u.indexOf('不好') !== -1) {
    res = '朕意已决(•̀ᴗ•́)و ̑̑  ，爱卿不用多说了'
    return res
  }
  if (u.indexOf('你好') !== -1) {
    res = '哈，我很好，你呢'
    return res
  }
  if (u.indexOf('是谁') !== -1) {
    res = '啊啊啊？不是我'
    return res
  }
  if (u.indexOf('好') !== -1) {
    res = '是吧，哈哈，我也觉得挺好(｡◕ˇ∀ˇ◕）'
    return res
  }
  if (u.indexOf('yo') !== -1) {
    res = 'yo yo 切克闹ʅ（´◔౪◔）ʃ '
    return res
  }
  if (u.indexOf('?') !== -1 || u.indexOf('?') !== -1) {
    res = '???啥'
    return res
  }
  if (u.indexOf('歌') !== -1) {
    res = '我不唱歌，但是我喜欢听歌，我最近一直听 Justin Timberlake 的 <a href="http://122.228.24.213/m10.music.126.net/20161209204519/c435515c9899ca90b26a2885af685ad1/ymusic/83a3/c84a/ba48/693a7c7598b6ee3204be6d47a7f3d452.mp3?wshc_tag=0&wsts_tag=584aa183&wsid_tag=7d78e05e&wsiphost=ipdbm" target="_Blank">Mirrors</a>，'
    return res
  }
  return res
}

export default {
  install (vue) {
    vue.prototype.ocean = ocean
  }
}
