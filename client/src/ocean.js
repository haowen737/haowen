function AI (word) {
  let u = word.toString()
  let res = randomWord()
  match(u, '蠢') || match(u, '呆') ? res = u : ''
  match(u, '天气') ? res = '嗯！今天天气不错，心情也超棒！' : ''
  match(u, '镜子') ? res = '不是镜子，是镜子(zi)，第四声，蛤，念错了吧' : ''
  match(u, '笑话') ? res = '哈哈哈，好好笑，唔？你问我笑什么？不告诉你' : ''
  match(u, '不好') ? res = '朕意已决(•̀ᴗ•́)و ̑̑  ，爱卿不用多说了' : ''
  match(u, '你好') ? res = '哈，我很好，你呢' : ''
  match(u, '是谁') ? res = '啊啊啊？不是我' : ''
  match(u, '好') ? res = '是吧，哈哈，我也觉得挺好(｡◕ˇ∀ˇ◕）' : ''
  match(u, 'yo') ? res = 'yo yo 切克闹ʅ（´◔౪◔）ʃ ' : ''
  match(u, '?') || match(u, '?') ? res = '???啥' : ''
  match(u, '歌') ? res = '我不唱歌，但是我喜欢听歌，我最近一直听 Justin Timberlake 的 <a href="http://122.228.24.213/m10.music.126.net/20161209204519/c435515c9899ca90b26a2885af685ad1/ymusic/83a3/c84a/ba48/693a7c7598b6ee3204be6d47a7f3d452.mp3?wshc_tag=0&wsts_tag=584aa183&wsid_tag=7d78e05e&wsiphost=ipdbm" target="_Blank">Mirrors</a>，' : ''
  return res
}

function match (u, s) {
  if (u.indexOf(s) !== -1) {
    return true
  } else {
    return false
  }
}
function randomWord () {
  let arr = [
    '啊呃。。。智商有限。。。听不懂你在说什么',
    '我在听,有话快说',
    '说说你的路途见闻吧',
    '你想被变成青蛙吗?',
    '天哪!你真高!',
    '祝你好运。',
    '你有什么事吗?',
    '来喝杯啤酒吗?',
    '你好，旅行者',
    '每一天，都是一个祝福',
    '哈哈哈哈...'
  ]
  let n = parseInt(Math.random() * 10)
  return arr[n]
}

export default {
  AI: AI,
  RandomWord: randomWord
}
