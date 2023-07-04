"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class MongoDbConnection {
    constructor() {
        this.connectionString = process.env.ATLAS_URI || "";
        this.client = new mongodb_1.MongoClient(this.connectionString);
    }
    async createConnection() {
        try {
            let connection = await this.client.connect();
            return connection.db("local");
        }
        catch (exception) {
            console.log(exception);
        }
    }
    async add(dataModel, collection) {
        let db = await this.createConnection();
        let collectionFromMongo = await db.collection(collection);
        return await collectionFromMongo.insertOne(dataModel);
    }
    async update(dataModel, collection) {
        let db = await this.createConnection();
        let collectionFromMongo = await db.collection(collection);
        return await collectionFromMongo.updateOne({ _id: dataModel._id }, { $set: dataModel });
    }
    async delete(dataModel, collection) {
        let db = await this.createConnection();
        let collectionFromMongo = await db.collection(collection);
        return await collectionFromMongo.deleteOne(dataModel);
    }
    async find(dataModel, collection) {
        let db = await this.createConnection();
        let collectionFromMongo = await db.collection(collection);
        return await collectionFromMongo.find(dataModel).toArray();
    }
    async findAll(collection) {
        let db = await this.createConnection();
        let collectionFromMongo = await db.collection(collection);
        return await collectionFromMongo.find({}).toArray();
    }
}
exports.default = MongoDbConnection;
