const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// let id = '5a9aad7fb10263c30f277ffa11';

// if(!ObjectID.isValid(id)) {
//     console.log('id is not valid');
//     return;
// }

// Todo.find({
//     _id:id
// }).then(todos => console.log('Todos', todos));

// Todo.findOne({
//     _id:id
// }).then(todo => console.log('Todo', todo));

// Todo.findById(id)
//     .then(todo => console.log('Todo by id', todo))
//     .catch(e => console.log(e));

let id = '5a9480b45ccc3b01121981fa';
User.findById(id)
    .then(user => {
        if(!user) {
            return console.log('User not found');
        }

        console.log('User', user);
    },
    e => console.log(e));