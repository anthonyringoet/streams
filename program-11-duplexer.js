var spawn = require('child_process').spawn
var duplexer = require('duplexer2')

module.exports = function (cmd, args) {
  var spawned = spawn(cmd, args)
  return duplexer(spawned.stdin, spawned.stdout)
}
