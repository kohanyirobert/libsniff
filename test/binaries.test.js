var assert = require('chai').assert
var carrier = require('carrier')
var spawn = require('child_process').spawn
var binaries = require('../lib/binaries')

describe('binaries.js', function() {
  it('ytdl should be executable', function(done) {
    var ytdl = spawn(binaries.ytdl)
    ytdl.on('exit', function(code, signal) {
      assert(code === 2)
      done()
    })
  })

  it('ffmpeg should be executable', function(done) {
    var ffmpeg = spawn(binaries.ffmpeg)
    ffmpeg.on('exit', function(code, signal) {
      assert(code === 1)
      done()
    })
  })

  it('ffprobe should be executable', function(done) {
    var ffprobe = spawn(binaries.ffprobe)
    ffprobe.on('exit', function(code, signal) {
      assert(code === 1)
      done()
    })
  })

  it('tagit should be executable', function(done) {
    var tagit = spawn(binaries.tagit)
    tagit.on('exit', function(code, signal) {
      assert(signal === 'SIGSEGV')
      done()
    })
  })
})
