const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function calculateResponse(){
	return new Promise((resolve, reject) => {
		resolve("Success")
	})
}

app.get('/api/getUsers', (req, res) => {
});

app.post('/api/sendApplicantData', (req, res) => {
   const getData = calculateResponse()
   getData
  .then(function (data) {
  	res.send({ express: data });
  })
  .catch(function(error){
  	res.send({ express: error})
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));