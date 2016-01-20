var concat = require('concat-stream')

process.stdin.pipe(concat(function (text) {
  var out = text.toString().split('').reverse().join('')
  console.log(out)
}))
