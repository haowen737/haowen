function ocean (word) {
  let u = word.toString()
  let res = '啊呃。。。智商有限。。。听不懂你在说什么'
  if (u.indexOf('蠢') !== -1 || u.indexOf('呆') !== -1) {
    res = '呵 愚蠢的人类。。。'
    return res
  }
  if (u.indexOf('天气') !== -1) {
    res = '啊。。今天天气不错。。吧'
    return res
  }
  if (u.indexOf('唱歌') !== -1) {
    res = '我会唱，但是我没有连音响，唱不出来'
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
  if (u.indexOf('?') !== -1) {
    res = '???啥'
    return res
  }
  return res
}

export default {
  install (vue) {
    vue.prototype.ocean = ocean
  }
}
