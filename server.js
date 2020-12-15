//Load HTTP module
const http = require('http');
const port = 3000;
const fs = require('fs');

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer(function(req, res) {

  //Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.readFile('index.html', function(error, data) {
    if (error) {
      res.writeHead(404)
      res.write('Error: File Not Found')
    } else {
      res.write(data)
    }
    res.end()
  })

});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
  console.log('Server is listening on port ' + port)
  }
})
