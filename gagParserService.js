function convert_v1(url) {
  const tag = url.split('/').slice(-1)[0];
  return `https://img-9gag-fun.9cache.com/photo/${tag}_460svvp9.webm`;
}

module.exports = {
  convert_v1,
}
