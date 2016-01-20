var split = require('split')
var through2 = require('through2')
var count = 0

process.stdin
  .pipe(split())
  .pipe(through2(function (line, _, next) {
    if (count % 2) {
      this.push(line.toString().toUpperCase() + '\n')
    } else {
      this.push(line.toString().toLowerCase() + '\n')
    }

    count++
    next()
  }))
  .pipe(process.stdout)
