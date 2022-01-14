
function lsFunction() {
    const fs = require('fs');
    fs.readdir('./', 'utf8', function (err, files) {
      if (err) {
        throw err
      } else {
        process.stdout.write(files.join('\n'));
        process.stdout.write('prompt >')
      }
    })
}

module.exports = lsFunction
