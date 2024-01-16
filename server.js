const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bmiRouter = require('./routes/bmiRouter'); 



const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use('/bmicalculator', bmiRouter);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
