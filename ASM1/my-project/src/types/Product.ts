type ProductRating = {
  rate : number,
  count : number
}
export type Product = {
    _id : string,
    title: string,
    price: number,
    description:string,
    category : string,
    image : string,
    rating : ProductRating
  }
export type FormValues= {
  email: string,
  password: string
}
export type FormValuesAccount = {
  username: string,
  email: string,
  password: string
}
