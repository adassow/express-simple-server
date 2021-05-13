const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
  res.send('Hello Express15!');
  for (let i = 0; i < 1; i++) {
    console.log(`Foooo`);
  }
});

server.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
