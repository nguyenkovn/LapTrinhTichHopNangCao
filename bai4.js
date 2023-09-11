const express = require('express');
const app = express();
const port = 8080;

app.get('*', (req, res) => {
  const url = req.originalUrl;
  const response = `URL sau tên miền của yêu cầu: ${url}`;
  res.send(response);
});

app.listen(port, () => {
  console.log(`Web server đang lắng nghe tại cổng ${port}`);
});