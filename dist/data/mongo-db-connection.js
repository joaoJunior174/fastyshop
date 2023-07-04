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
        return await collectionFromMongo.insertOne(dataModel);
    }
    async delete(dataModel, collection) {
        let db = await this.createConnection();
        let collectionFromMongo = await db.collection(collection);
        return await collectionFromMongo.insertOne(dataModel);
    }
    async read(dataModel, collection) {
        let db = await this.createConnection();
        let collectionFromMongo = await db.collection(collection);
        return await collectionFromMongo.insertOne(dataModel);
    }
}
exports.default = MongoDbConnection;
