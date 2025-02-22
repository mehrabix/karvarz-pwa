export interface CardItem {
    discountedTotal?: number
    id?: number
    products: ProductItem[]
    total?: number
    totalProducts?: number
    totalQuantity?: number
    userId?: number

}

export interface ProductItem {
    discountPercentage?: number
    discountedTotal?: number
    id?: number
    price?: number
    quantity?: number
    thumbnail: string
    title?: string
    total?: number
}