import { ICategoryFilter } from "@/interfaces/ICategoryFilter";
import { ISku } from "./ISku";

export interface ICategorySku extends ISku, Pick<ICategoryFilter, 'keywords' | 'type'>{
    
}

export function isCategorySku(obj: any): obj is ICategorySku {
    return 'type' in obj && obj.type === 'Category';
  }
