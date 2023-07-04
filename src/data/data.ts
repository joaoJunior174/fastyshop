export interface Data {
    createConnection(): Promise<any>
    add(modelData: any, collection: string): Promise<any>
    delete(modelData: any, collection: string): Promise<any>
    update(modelData: any, collection: string): Promise<any>
    find(modelData: any, collection: string): Promise<any>
    findAll(collection: string): Promise<any>
}