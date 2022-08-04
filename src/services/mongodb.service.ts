const mongoose = require('mongoose');
export default class MongoDBService {
    static async init() {
        await mongoose.connect(`${process.env.DB_CONN_STRING}/${process.env.DB_NAME}`).catch(error => console.log(error));
        console.log(`Successfully connected to database MongoDB: ${process.env.DB_NAME}`);
    }
};


