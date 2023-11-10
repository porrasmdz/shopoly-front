import { ApiResponse } from '@/interfaces/IApiResponse';
import { IItem } from '@/interfaces/IItem';
import { defineStore, acceptHMRUpdate } from 'pinia'

export interface IItemState extends Omit<IState, 'data'> {
    data: IItem[]
}

export const useItemStore = defineStore('itemStore', {
 state: (): IItemState => ({
  data: [],
  
  loading: false,
  limit: 10,
  page:1,
  error:'',
  totalResults: 0,
  totalPages:1,
  nextPageUrl:null,
  prevPageUrl: null 
 }),

 getters: {},
 actions: {
    
    loadItem(response:ApiResponse) {
            
        this.data = response.data;
        this.totalResults = response.total;
        this.page = response.current_page;
        this.totalPages = response.last_page;           
        this.nextPageUrl = response.next_page_url;
        this.prevPageUrl = response.prev_page_url
    },
 },
})

if (import.meta.hot) {
 import.meta.hot.accept(acceptHMRUpdate(useItemStore, import.meta.hot))
}


