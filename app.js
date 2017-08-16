const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require( src = "/Users/claudiazeledon/Documents/Daily_Projects/SupRoboHunt/data.json");

app.engine('mustache', mustacheExpress());
app.set('robots', './robots')
app.set('robots engine', 'mustache')

app.use(express.static(__dirname + '/robots'));

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
