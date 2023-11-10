import { BaseItem } from "./BaseItem";
import { ICategory } from "./ICategory";
import { IFile } from "./IFile";
import { ISku } from "./ISku";

export interface IItem extends BaseItem{
    name: string,
    description: string,
    status: string,
    sort: number,
    category_id: number,
    category?: ICategory,
    price: number,
    files: IFile[],
    item_attributes: unknown,
    skus: ISku[]
}