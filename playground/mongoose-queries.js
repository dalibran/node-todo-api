const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b8ba3b241b5daca73a28485';
var userId = '5b851580ddbbd7ab4b137b50';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

if(!ObjectID.isValid(userId)) {
  return console.log('Id not valid');
};

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('User not found');
  };
  console.log('User By Id', user);
}).catch((e) => console.log(e));


