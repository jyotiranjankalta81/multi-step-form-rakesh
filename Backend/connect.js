// connecting Nodejs with MongoDB

// 1. import mongoClient from mongodb

const MongoClient = require('mongodb').MongoClient;

// 2. Get the path of mongodb server

const getMongoUrl = 'mongodb://0.0.0.0:27017';

// 3. Pass the url to mongodb

const client = new MongoClient(getMongoUrl);


async function getData() {

    //4. connecting with mongodb server
    const connect = await client.connect(); // this line returns a promise so we should handle it.

    //5. connecting with database
    const db = connect.db('newUser');

    // 6. Connecting to collection 'dummyData' in database 'rakeshDB'.
    const collection = db.collection('userInfo');
    const serverResponse = await collection.find().toArray();
    console.log(serverResponse);

}
getData();



