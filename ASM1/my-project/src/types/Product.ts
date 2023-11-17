type ProductRating = {
  rate : number,
  count : number
}
export type Product = {
    title: string,
    price: number,
    description:string,
    category : string,
    image : string,
    rating : ProductRating
  }