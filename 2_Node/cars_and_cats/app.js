// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);


    // Have localhost:7077/cars go to a simple HTML page that shows some cool pictures of different cars.
    // These car pictures should be stored in your images folder on your server.  DON'T just link to pictures of cars stored somewhere else!!

    // Have localhost:7077/cats show a simple HTML page with some cool pictures of cats.  Again, make sure these pictures are stored on your server.

    // Have localhost:7077/cars/new show a simple form where the user can add a new car information. For the /cars/new HTML page, no need to store
    // this information in the database nor is there a need to validate the entries. Simply have the form there.

    // this is how we do routing:
    if(request.url === '/') {
      fs.readFile('./views/index.html', 'utf8', function (errors, contents){
          response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
          response.write(contents);  //  send response body
          response.end(); // finished!
      });
    }

    else if(request.url === '/stylesheets/style.css'){
      fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
     });
    }

    else if(request.url === '/images/blue_car.jpeg'){
      // notice we won't include the utf8 encoding
      fs.readFile('./images/blue_car.jpeg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      });
    }

    else if(request.url === '/images/red_car.jpeg'){
      // notice we won't include the utf8 encoding
      fs.readFile('./images/red_car.jpeg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      });
    }

    else if(request.url === '/images/purple_car.jpeg'){
      // notice we won't include the utf8 encoding
      fs.readFile('./images/purple_car.jpeg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      });
    }

    else if(request.url === '/images/grey_cat.jpeg'){
      // notice we won't include the utf8 encoding
      fs.readFile('./images/grey_cat.jpeg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      });
    }

    else if(request.url === '/images/orange_cat.jpeg'){
      // notice we won't include the utf8 encoding
      fs.readFile('./images/orange_cat.jpeg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      });
    }

    else if(request.url === '/images/burrito_cat.jpeg'){
      // notice we won't include the utf8 encoding
      fs.readFile('./images/burrito_cat.jpeg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      });
    }

    else if (request.url === "/cars") {
     fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
         response.writeHead(200, {'Content-type': 'text/html'});
         response.write(contents);
         response.end();
     });
    }

    else if (request.url === "/cats") {
     fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
         response.writeHead(200, {'Content-type': 'text/html'});
         response.write(contents);
         response.end();
     });
    }

    else if (request.url === "/cars/new") {
      fs.readFile('./views/add_car.html', 'utf8', function (errors, contents){
          response.writeHead(200, {'Content-type': 'text/html'});
          response.write(contents);
          response.end();
        });
    }

    // request didn't match anything:
    else {
      fs.readFile('./views/error.html', 'utf8', function (errors, contents){
          response.writeHead(200, {'Content-type': 'text/html'});
          response.write(contents);
          response.end();
        });
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
