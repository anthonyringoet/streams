const crypto = require('crypto')
const tar = require('tar')
const zlib = require('zlib')
const concat = require('concat-stream')
const unzip = zlib.createGunzip()
const cipher = process.argv[2]
const passphrase = process.argv[3]

var parser = tar.Parse()
parser.on('entry', function (e) {
  if (e.type !== 'File') return

  var hash = crypto.createHash('md5', {encoding: 'hex'})
  e.pipe(hash).pipe(concat(function (h) {
    console.log(`${h} ${e.path}`)
  }))
})

process.stdin
  .pipe(crypto.createDecipher(cipher, passphrase))
  .pipe(unzip)
  .pipe(parser)
