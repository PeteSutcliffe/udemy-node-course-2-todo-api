const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');        
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a92fc5e78a0e4d9c046ddee')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5a9301fd78a0e4d9c046df38")
    }, {
        $set: {
            name: 'Pete'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    });

    //db.close();
});