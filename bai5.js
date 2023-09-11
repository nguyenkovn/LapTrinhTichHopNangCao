const express = require('express');
const app = express();
const port = 8080;

app.get('*', (req, res) => {
  const params = req.params;
  const query = req.query;
  const headers = req.headers;

  const response = {
    params: params,
    query: query,
    headers: headers
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Web server đang lắng nghe tại cổng ${port}`);
});
