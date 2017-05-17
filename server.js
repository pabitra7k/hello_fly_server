var http = require('http');

//Setup the express js module
var express = require('express');
var app = express();

//Setup the body parser module, in case we want to read the req body - will update later
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//test get request - to test from browser
app.get("/", function (req, res) {
	res.send({ name: "Test" });
});


//Authentication Post Request for Sample test
app.post("/Authenticate", function (req, res) {
	res.send(AuthenticateRS);
});

//Check In Status API
app.post("/newapp/checkin", function (req, res) {
  // Domain you wish to allow
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'YOUR-CUSTOM-HEADERS-HERE');

  // Set to true if you need the website to include cookies in  requests
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Check if preflight request
  if (req.method === 'OPTIONS') {
    res.status(200);
    res.end();
  }
  else {
    // Pass to next layer of response
    res.send(CheckInStatus);
  }

});


var server = http.createServer(app);

// Listen server on port 3000
server.listen(3000);


//Authentication Model
var AuthenticateRS = {
	Name : "Test Name",
	MemberType : "Test Member",
};


//Check In status
var CheckInStatus =
 {
	data : "CheckIn Successfully",

};
