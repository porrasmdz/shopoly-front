import { ApiResponse } from "@/interfaces/IApiResponse";
import { IItem } from "@/interfaces/IItem";
import { useItemStore } from "@/stores/itemStore";
import { storeToRefs } from "pinia";

export const useItem = () => {
  const API_URL = import.meta.env.VITE_API_URL + "items";

  const itemStore = useItemStore();
  const { data, limit, loading, totalResults, nextPageUrl, prevPageUrl } =
    storeToRefs(itemStore);

  const getAllItems = async () => {
    loading.value = true;
    fetch(API_URL)
      .then((res) => {
        res
          .json()
          .then((resbody) => {
            data.value = resbody.data;
            loading.value = false;
            console.log(data.value)
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
    totalResults,
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
