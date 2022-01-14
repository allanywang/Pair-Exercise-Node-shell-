function catFunction(files)
{
  const fs = require('fs');

  for(let file of files)
  {
    fs.readFile(`./${file}`, 'utf8', function (err, data){
    if (err)
      throw err
    else
    {
      process.stdout.write(data);
      process.stdout.write('prompt >')

    }
  })
  }
}

module.exports = catFunction;
