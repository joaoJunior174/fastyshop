import { MongoClient } from 'mongodb';
import { Data } from '../../data/data';

export default class MongoDbConnection implements Data {

private readonly connectionString = process.env.ATLAS_URI || ""
private readonly client: any

    constructor() {
        this.client = new MongoClient(this.connectionString)
    }    

    async createConnection(): Promise<any> {
        
        try {
            let connection = await this.client.connect()
            return connection.db("local")
        } catch(exception) {
            console.log(exception)
        }
    }

    async add(dataModel: any, collection: string): Promise<any> {
        let db = await this.createConnection()
        let collectionFromMongo = await db.collection(collection)
        return await collectionFromMongo.insertOne(dataModel)  
    }

    async update(dataModel: any, collection: string): Promise<any> {
        let db = await this.createConnection()
        let collectionFromMongo = await db.collection(collection)
        return await collectionFromMongo.updateOne( {_id: dataModel._id } ,{ $set: dataModel })  
    }

    async delete(dataModel: any, collection: string): Promise<any> {
        let db = await this.createConnection()
        let collectionFromMongo = await db.collection(collection)
        return await collectionFromMongo.deleteOne(dataModel)  
    }

    async find(dataModel: any, collection: string): Promise<any> {
        let db = await this.createConnection()
        let collectionFromMongo = await db.collection(collection)
        return await collectionFromMongo.find(dataModel).toArray()
    }

    async findAll(collection: string): Promise<any> {
        let db = await this.createConnection()
        let collectionFromMongo = await db.collection(collection)
        return await collectionFromMongo.find({}).toArray()
    }
}
