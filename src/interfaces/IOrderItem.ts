import { ISku } from "./ISku";

export interface IOrderItem {
    image: string,
    name: string,
    skus: ISku,
    price: number,
    discount: number,
    quantity: number,
    total: number
}