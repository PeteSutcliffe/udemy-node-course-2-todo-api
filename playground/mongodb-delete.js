const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');        
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(result => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
    //     console.log(result);
    // });

    //db.collection('Users').deleteMany({name: 'pete'}).then(res => console.log(res));

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a92fd7b78a0e4d9c046de32')}).then(res => console.log(res));

    //db.close();
});