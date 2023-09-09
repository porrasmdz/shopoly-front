<script setup lang="ts">
import { ICategory } from "@/interfaces/ICategory.ts";
import { bedroomp, kitchenp, outdoorp, living_roomp, product_detailp, mattrassp } from '@/constants/assets';

const categories: (ICategory)[] = [
  {
    image: bedroomp,
    title: 'Bedroom'
  },
  {
    image: mattrassp,
    title: 'Matrass'
  },
  {
    image: outdoorp,
    title: 'Outdoor'
  },
  {
    image: product_detailp,
    title: 'Sofa'
  },
  {
    image: kitchenp,
    title: 'Kitchen'
  },
  {
    image: living_roomp,
    title: 'Living Room'
  }
]
</script>
<template>
  <!-- Cathegories -->
  <section class="col-span-12 mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-3 lg:gap-5">
    <router-link to="/" v-for="category in categories" :key="category.title">
      <div class="relative cursor-pointer">
        <img class="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100" :src="category.image"
          alt="bedroom cathegory image" />

        <p
          class="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
          {{ category.title }}
        </p>
      </div>
    </router-link>
  </section>
  <!-- /Cathegories -->
</template>