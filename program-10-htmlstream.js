var trumpet = require('trumpet')
var through = require('through2')
var tr = trumpet()

var selector = tr.select('.loud').createStream()

selector.pipe(through(function (buffer, _, next) {
  this.push(buffer.toString().toUpperCase())
  next()
})).pipe(selector)

process.stdin.pipe(tr).pipe(process.stdout)
