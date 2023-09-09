<script setup lang="ts">
import FilterGroup from '@components/FilterGroup.vue';
import { IFilter } from "@/interfaces/IFilter.ts";
import { ICategoryFilter } from "@/interfaces/ICategoryFilter.ts";
import { IPriceFilter } from "@/interfaces/IPriceFilter.ts";
import { IAttributeFilter } from "@/interfaces/IAttributeFilter.ts";
import { IColorFilter } from "@/interfaces/IColorFilter.ts";
const filters: (IFilter)[] = [
  {
    title: 'Categories',
    keywords: [{
      key: 'Bedroom',
      results: 12
    },
    {
      key: 'Sofa',
      results: 15
    },
    {
      key: 'Office',
      results: 14
    },
    {
      key: 'Outdoor',
      results: 124
    }],
    type: 'Category'

  } as ICategoryFilter,
  {
    title: 'Brands',

    keywords: [{
      key: 'APEX',
      results: 12
    },
    {
      key: 'Call of SOFA',
      results: 15
    },
    {
      key: 'Puff B&G',
      results: 14
    },
    {
      key: 'Recargaloya',
      results: 124
    }],
    type: 'Category'
  } as ICategoryFilter,
  {
    title: 'Price',
    currency: 'dollar',
    type: 'Price'
  } as IPriceFilter,
  {
    title: 'Size',
    keywords: ['XS', 'S', 'M', 'L', 'XL'],
    type: 'Attribute'
  } as IAttributeFilter,
  {
    title: 'Color',
    keywords: ["Grey", "Indigo", "Maroon"],
    type: 'Color'
  } as IColorFilter,



]
</script>
<template>
  <!-- sidebar  -->
  <section class="hidden w-[300px] flex-shrink-0 px-4 lg:block -mt-5">
    <div v-for="filter in filters" :key="filter.title" class="flex border-b last:border-none py-5">
      <FilterGroup :filter="filter" />
    </div>


  </section>
  <!-- /sidebar  -->
</template>