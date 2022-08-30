// Простейший пример сервера на node 

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const dataFromServer = JSON.stringify([{
    age: 38,
    name: 'Anton'
}])

const server = http.createServer((req, res) => {
  console.log('req.url', req.url)
  console.log('req.method', req.method)  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.write(dataFromServer) //пример отправки данных формате джейсон, а не разметки 'Content-Type', 'application/json'
  res.write('<h1> Hello World </h1>')
  res.end(); // Завершение ответа и передача данных в браузер
});

server.listen(port, hostname, (error) => {
    error ? console.log('error', error) : console.log(`Server running at http://${hostname}:${port}/`);
});
