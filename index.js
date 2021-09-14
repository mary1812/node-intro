'use strict';
//ТРИ ВИДА:
// const fs = require('fs');
// const fsPromises = fs.promises;
//const fs = require('fs/promises');
// const fsPromises2 = require('fs').promises;



// fs.readFile('./text.txt').then((response) => {
//   console.log(response.toString());
// }) лучше не использовать, а делать через encoding
//utf-8 это кодировка unicode


const fs = require('fs/promises');

// fs.readFile('./text.txt', {encoding: 'utf-8'}).then((textData) => {
//   console.log(textData);
// })

fs.readFile('./text.txt',{ encoding: 'utf-8' }).then((textData) => {
  console.log(textData);
  const newFileText = `OLD CONTENT ${textData}\nNEW CONTENT: LOREM BLABLABLA`;
  fs.writeFile('./newFile.txt', newFileText)
});

