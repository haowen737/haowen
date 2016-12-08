function formatTime (date, mode) {
  date = new Date(date)
  if (date.toString() === 'Invalid Date') {
    return
  }
  let year = date.getFullYear()
  let month = ('0' + (date.getMonth() + 1)).substr(-2)
  let day = ('0' + date.getDate()).substr(-2)
  let hour = ('0' + date.getHours()).substr(-2)
  let minute = ('0' + date.getMinutes()).substr(-2)
  let second = ('0' + date.getSeconds()).substr(-2)
  return mode
    .replace('yyyy', year)
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('dd', day)
    .replace('hh', hour)
    .replace('HH', hour)
    .replace('mm', minute)
    .replace('ss', second)
}

export default {
  install (vue) {
    vue.filter('formatDate', formatTime)
    vue.prototype.formatTime = formatTime
  }
}
