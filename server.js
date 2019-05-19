const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5555;

app.use('/static', express.static(path.join(__dirname, 'client')));

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})

