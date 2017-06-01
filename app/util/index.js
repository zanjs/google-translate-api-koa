const URLREGEXP = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/

const isUrl = text => URLREGEXP.test(text);

module.exports = {
  URLREGEXP,
  isUrl
}