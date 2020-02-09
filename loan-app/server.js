const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function getData(){
	return {result: 'success'}
}

app.get('/api/getData', (req, res) => {
  const myThing = getData()
  res.send({ express: myThing });
});

app.post('/api/sendApplicantData', (req, res) => {
  console.log(req.body);
  res.send({thing:'received'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));