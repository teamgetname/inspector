var http = require('http');
var express = require('express');

app = express();

var inData = {
	firstName: "Gabriel",
  	lastName: "Barreto",
	headline: "Lovely of Users & Creator of Solutions",
	profilePicutre: "https://media.licdn.com/mpr/mprx/0_zdfeR_jRXXO05Ej3zDOURhDsk3Rlbdj3cHRcR3YoUXf8ZSoTMf0kvToXE7U7XapDqoDnqQ2W4zxg",
  	skills:  {_total: 21,
    	values: 	[{id: 6  , skill: {name: "AngularJS"}},
       		 {id: 7  , skill: {name: "Node.js"}},
       		 {id: 8  , skill: {name: "MongoDB"}},
       		 {id: 9  , skill: {name: "C#"}},
       		 {id: 10 , skill: {name: "Python"}},
       		 {id: 11 , skill: {name: "Microsoft SQL Server"}}]},
	position: {lat: 23.50, lng: 48.03},
	profileURL: "https://br.linkedin.com/in/barreto-gabriel"
};

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.get('/data', function(req, res) {
	res.json(inData);
});