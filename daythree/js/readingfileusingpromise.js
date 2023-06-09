const {promises: {readFile}} = require("fs");

const files = [
   "abc.html"
];

Promise.all(files.map(file => {
  return readFile(file);
})).then(fileBuffers => {
  fileBuffers.forEach(fileBuffer => {
    console.log(fileBuffer.toString());
  });
}).catch(error => {
  console.error(error.message);
  //process.exit(1);
});