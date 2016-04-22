var _ = require('lodash')
var fs = require('fs')
var ffmpegDownload = require('libsniff-ffmpeg')
var tagitDownload = require('libsniff-tagit')
var ytdlDownload = require('libsniff-youtube-dl')

var doDownload = function(name, fn, opts) {
  fs.stat(name, function(err, stats) {
    if (err) {
      fn(_.defaults(opts, {
        dir: name,
        targets: [
          'linux-ia32',
          'linux-x64',
          'win32-ia32',
          'win32-x64',
          'darwin-x64',
        ]
      }), function(downloads) {
        downloads.forEach(function(download) {
          download.files.forEach(function(file) {
            fs.chmod(file, '0744', function(err) {
              if (err) {
                throw new Error(err)
              }
              console.log(name, file)
            })
          })
        })
      })
    }
  })
}

doDownload('ffmpeg', ffmpegDownload, {archive: true})
doDownload('youtube-dl', ytdlDownload, {archive: false})
doDownload('tagit', tagitDownload, {archive: true})

