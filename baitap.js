const http = require('http');
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send(new Date().toLocaleDateString()); 
  });
app.get('/department/:name', (req, res) => {
    if (req.params.name === 'teacher') {
      res.send('Trần Thị Minh Khoa');
    } else if (req.params.name === 'student') {
      res.send('Nguyễn Văn Nguyên_20056601');
    } else {
      res.status(404).send('Not found');
    }
  });
  
  app.listen(8080, () => {
    console.log('Server running on port 8080');
  });