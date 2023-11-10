<script setup lang="ts">
import {  bedroomp, product_chairp, mattrassp, outdoorp } from '@/constants/assets';
import TheBreadcrumbs from '@/components/compositions/TheBreadcrumbs.vue';
import CartItem from '@/components/CartItem.vue';
import OrderSummary from '@/components/compositions/OrderSummary.vue';
import { IOrderItem } from '@/interfaces/IOrderItem';
import cartStore from '@/stores/cartStore';
import { storeToRefs } from 'pinia';

const {totalItems} = cartStore();
const { items:cartData } = storeToRefs(cartStore()); 
const orderItems: (IOrderItem)[] = [
  {
    image: bedroomp,
    name:"ITALIAN BED",
    price:200,
    quantity:1,
    skus: {
        title: "Size",
        keywords: ["L"],
        type: "Attribute"
    },
    discount: 0,
    total: 200

  },
  {
    image: product_chairp,
    name:"GUYER CHAIR",
    price:200,
    quantity:1,
    skus: {
        title: "Size",
        keywords: ["XL"],
        type: "Attribute"
    },
    discount: 0,
    total: 200

  },
  {
    image: outdoorp,
    name:"OUTDOOR CHAIR",
    price:200,
    quantity:1,
    skus: {
        title: "Size",
        keywords: ["XL"],
        type: "Attribute"
    },
    discount: 0,
    total: 200

  },
  {
    image: mattrassp,
    name:"MATTRASS_COMFORT +",
    price:200,
    quantity:1,
    skus: {
        title: "Size",
        keywords: ["XL"],
        type: "Attribute"
    },
    discount: 0,
    total: 200

  }
] 

</script>
<template>
      <TheBreadcrumbs class="col-span-12" />
      <section 
        class="col-span-12 w-full container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
      >
        <!-- Mobile cart table  -->
        <section
          class="container mx-auto my-3 flex w-full flex-col gap-3 px-4 md:hidden"
        >
         
          <CartItem v-for="item in cartData" :key="`${item.name}-${item.skus}`" :order_item="item"/>
        </section>
        <!-- /Mobile cart table  -->

        <!-- Desktop cart table  -->
        <section
          class="hidden h-[600px] w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 md:grid"
        >
          <table class="table-fixed">
            <thead class="h-16 bg-neutral-100 dark:bg-gray-800">
              <tr>
                <th class="text-left pl-6">ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <!-- 1 -->
              <div v-if="cartData.length < 1" class="my-12">
              No hay items todavia
              </div>
              <CartItem  v-for="item in cartData" :key="`lg-${totalItems}`" :order_item="item" />

             
            </tbody>
          </table>
        </section>
        <!-- /Desktop cart table  -->

        <!-- Summary  -->

        <section class="mx-auto w-full px-4 md:max-w-[400px]">
            <OrderSummary />
        </section>
      </section>

</template>