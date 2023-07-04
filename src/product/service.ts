import { ok } from "../shared/http"
import { Data } from "../data/data"
import { HttpResponse } from "../shared/http" 
import { noContent, serverError } from "../shared/http"
import { Service } from "../shared/service"
import { ProductDto } from "./dto/product-dto"
import { formatArrayResponseToDto } from "./helpers/format-response-dto"
import { isEmptyObject } from "../shared/validation"
import { mergeProductDto } from "./helpers/merge-product-dto"

export class ProductService implements Service {

    private db?: Data
    collectionName: string = "products"
    constructor(db: Data) {
        this.db = db
    }

    async add (productDto: ProductDto): Promise<HttpResponse> {
      try {
        await this.db?.add(productDto, this.collectionName)
        return noContent()
      } catch (error: any) {
        return serverError(error)
      }
    }
    async update (params: any, productDto: ProductDto): Promise<HttpResponse> {
      try {
        const product = mergeProductDto(productDto, await this.db?.find(params, this.collectionName))
        await this.db?.update(product, this.collectionName)
        return noContent()
      } catch (error: any) {
        return serverError(error)
      }
    }

    async delete (params: any): Promise<HttpResponse> {
      try {
        await this.db?.delete(params, this.collectionName)
        return noContent()
      } catch (error: any) {
        return serverError(error)
      }
    }

    async read (params?: any): Promise<HttpResponse> {
      try {
        if (isEmptyObject(params)) {
            return ok(formatArrayResponseToDto(await this.db?.findAll(this.collectionName)))
        } 
        return ok(formatArrayResponseToDto(await this.db?.find(params, this.collectionName)))
      } catch (error: any) {
        return serverError(error)
      }
    }    
}
