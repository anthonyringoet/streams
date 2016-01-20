var through = require('through2')
var tr = through(write, end)

function write (buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase())
  next()
}

function end (done) {
  done()
}

process.stdin.pipe(tr).pipe(process.stdout)
