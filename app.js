const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require( src = "./data.json");

//Using the...absolute path on local computer works to get the data.json to show up
// const data = require( src = "/Users/claudiazeledon/Documents/Daily_Projects/SupRoboHunt/data.json");

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

// app.use(express.static(__dirname + '/public/'));

app.use(express.static("views"));
//Somehow setting a static function for views folder works great when trying to get the css to show up on the web page and stylize the darn thing.

// app.use(express.static(__dirname + './views'));
// app.use('/static', express.static('public'));

app.get('/robo/', function (req, res) {
  res.render('robo.mustache', data);
})


app.listen(3000, function () {
  console.log('Successfully started express application!')
});




// app.engine('mustache', mustacheExpress());
// app.set('views', './views')
// app.set('view engine', 'mustache')
//
// //Listening on root
// app.get('/todo/', function (req, res) {
//   // TODO write your code here
//
//   res.render( 'todo.mustache', { todoList: [
//     {"name": "Learn Node Basics"},
//     {"name": "Learn Express Basics"},
//     {"name": "Learn Mustache"},
//     {"name": "Learn HTML Forms with Express"},
//     {"name": "Learn about authentication"},
//     {"name": "Learn HTML Forms with Express"},
//     {"name": "Learn about authentication"},
//     {"name": "Learn HTML Forms with Express"},
//     {"name": "Learn about authentication"},
//     {"name": "Learn HTML Forms with Express"}
//   ]});
// });
