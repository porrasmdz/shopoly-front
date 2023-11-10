import { ref } from "vue";
import { defineStore } from "pinia";
import { IItem } from "@/interfaces/IItem";

export default defineStore('cart', () => {

    const items = ref<IItem[]>([]);
    const totalItems = ref(0);
    const totalCost = ref(0);

    const addItem = (item: IItem) => {
        let targetItem = items.value.filter( currItem => currItem.id === item.id )[0];

        if(targetItem) targetItem.data.count += 1;
        else items.value = [...items.value, {...item, data : {count: 1}}];

        totalItems.value += 1;
        totalCost.value += item.data?.price;
    };

    const removeItem = (item:IItem) => {
        let targetItem = items.value.filter( currItem => currItem.id === item.id )[0];

        if(targetItem.data.count === 1) items.value = items.value.filter( currItem => currItem.id !== item.id );
        else targetItem.data.count -= 1;

        totalItems.value -= 1;
        totalCost.value -= item.data.price;
    };

    return {
        items,
        addItem,
        removeItem,
        totalItems,
        totalCost
    };

});