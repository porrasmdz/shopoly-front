// @ts-nocheck
import { ApiResponse } from "@/interfaces/IApiResponse";
import { IItem } from "@/interfaces/IItem";
import { useItemStore } from "@/stores/itemStore";
import { storeToRefs } from "pinia";

export const useItem = () => {
  const API_URL = import.meta.env.VITE_API_URL + "items";

  const itemStore = useItemStore();
  const { data, limit, loading, page, totalResults, nextPageUrl, prevPageUrl, totalPages } =
    storeToRefs(itemStore);

  const getAllItems = async (url?) => {
    let targetUrl = (url ?? API_URL )
    loading.value = true;
    fetch(targetUrl, {
      headers:{},
      
    })
      .then((res) => {
        res
          .json()
          .then((resbody:ApiResponse) => {
            data.value = resbody.data;
            page.value = resbody.current_page;
            totalResults.value = resbody.total;
            totalPages.value = resbody.last_page;
            nextPageUrl.value = resbody.next_page_url;
            prevPageUrl.value = resbody.prev_page_url; 
            loading.value = false;
          })
          .catch((err) => {
            loading.value = false;
          });
      })
      .catch((err) => {
        console.log("Error", err);
        loading.value = false;
      });
  };
  const findItem = async (dto: IItem) => {}; //TODO CHANGE CATEGORY DTOS
  const createItem = async (payload: IItem) => {};
  const updateItem = async (id: string | number, payload: any) => {};
  const deleteItem = async (id: string | number) => {};

  return {
    data,
    limit,
    loading,
    page,
    totalResults,
    totalPages,
    nextPageUrl,
    prevPageUrl,

    //(functions)
    getAllItems,
    findItem,
    createItem,
    updateItem,
    deleteItem,
  };
};
