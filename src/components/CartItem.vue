<script setup lang="ts">
import { IOrderItem } from '@/interfaces/IOrderItem';
import BaseIcon from '@components/BaseIcon.vue';

defineProps<{
    order_item: IOrderItem
}>()
</script>
<template>
    <div class="md:hidden flex w-full border px-4 py-4">
        <img class="self-start object-contain" width="90px" :src="order_item.image" alt="Chair image" />
        <div class="ml-3 flex w-full flex-col justify-center">
            <div class="flex items-center justify-between">
                <p class="text-xl font-bold">{{ order_item.name }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path
                        d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                </svg>
            </div>
            <p class="text-sm text-gray-400">{{ order_item.skus.title }}: {{ order_item.skus.keywords[0] }} </p>
            <p class="py-3 text-xl font-bold text-violet-900">${{ order_item.price }}</p>
            <div class="mt-2 flex w-full items-center justify-between">
                <div class="flex items-center justify-center">
                    <button
                        class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                        &minus;
                    </button>
                    <div
                        class="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                        {{ order_item.quantity }}
                    </div>
                    <button
                        class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                        &#43;
                    </button>
                </div>

                <div class="text-red-500">
                    <BaseIcon :icon="'trash'"></BaseIcon>

                </div>
            </div>
        </div>
    </div>

    <tr class="hidden md:table-row h-[100px] border-b last:border-none">
        <td class="align-middle">
            <div class="flex">
                <img class="w-[90px]" :src="order_item.image" alt="image" />
                <div class="ml-3 flex flex-col justify-center">
                    <p class="text-xl font-bold">{{ order_item.name }}</p>
                    <p class="text-sm text-gray-400">{{ order_item.skus.title }}: {{ order_item.skus.keywords[0] }}</p>
                </div>
            </div>
        </td>
        <td class="mx-auto text-center">&#36;{{ order_item.price }}</td>
        <td class="align-middle">
            <div class="flex items-center justify-center">
                <button
                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                    &minus;
                </button>
                <div class="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                    {{ order_item.quantity }}
                </div>
                <button
                    class="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                    &#43;
                </button>
            </div>
        </td>
        <td class="mx-auto text-center">&#36;{{ order_item.total }}</td>
        <td class="align-middle m-0 cursor-pointer text-red-500">
            <BaseIcon :icon="'trash'" />
        </td>
    </tr>
</template>