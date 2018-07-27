# places-near-me

* I have used express.js for the server.
* It serves a simple static page in /public.
* The web page uses React to render a simple search box and send to the server a location.
* The server then sends that location in a request to FourSquare API to get recommendations.
* Those recommendations are parsed and converted into a simple list of venue names that are returned to the front end.
* The front end then updates the page with the list of venues.
* Finally, the website has been deployed using Heroku, and is accessible here: https://fathomless-journey-27605.herokuapp.com/
