var path = require('path')

var getBinary = function(dir, name) {
  return path.join(dir, getTarget(), name) + getExt()
}

var getExt = function() {
  return process.platform === 'win32' ? '.exe' : ''
}

var getTarget = function() {
  return process.platform + '-' + process.arch
}

module.exports = {
  ytdl: getBinary('youtube-dl', 'youtube-dl'),
  ffprobe: getBinary('ffmpeg', 'ffprobe'),
  ffmpeg: getBinary('ffmpeg', 'ffmpeg'),
  tagit: getBinary('tagit', 'tagit')
}
