const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('contact.html', 'utf8');
const data1 = fs.readFileSync('about.html', 'utf8');
const data2 = fs.readFileSync('services.html', 'utf8');
const home = fs.readFileSync('index.html', 'utf8');
const server = http.createServer((req, res) => {
  console.log('Yaaaaaaaaaaaa');
  console.log(req.url);

  if (req.url === '/') {
    res.end(home.replace("Welcome to the home page!", "Home Page"));
  } else if (req.url === '/about') {
    res.end(data1);
  }  else if (req.url === '/contact') {
    res.end(data);
  }  else if (req.url === '/services') {
    res.end(data2);
  } else {
    res.end('Page not found');
  }
});

server.listen(5500, '127.0.0.1', () => {
  console.log('Server is running on http://127.0.0.1:5500/');
});
