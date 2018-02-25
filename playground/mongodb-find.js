const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');        
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //         _id: new ObjectID('5a91b2477e0c360fd29c3eaa')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, null, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then(count => {
    //     console.log(`Todos count: ${count}`);
    // });

    db.collection('Users').find({
        name: 'pete'
    }).toArray().then(docs => {
        console.log(JSON.stringify(docs, null, 2));
    }, err =>{
        console.log(err);
    })

    db.close();
});