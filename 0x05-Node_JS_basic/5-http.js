const http = require('http');
const url = require('url')
const countStudents = require('./3-read_file_async');


const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true)
  const pathname = parsedUrl.pathname
  if (pathname === '/') {
    res.writeHeader(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!');
  }
  if (pathname === '/students') {
    res.writeHeader(200, {'Content-Type': 'text/plain'});
    // console.log('This is the list of our students')
    countStudents('database.csv')
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((err) => console.log(err))
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
