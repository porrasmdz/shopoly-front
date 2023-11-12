<script setup lang="ts">
import { ICategory } from "@/interfaces/ICategory.ts";
import { imgplaceholder } from '@/constants/assets';
import { useCategory } from "@/composables/useCategory";
import { onMounted, onUpdated } from "vue";

let maxCategories = 10;
const checkCategoryImage = (category: ICategory) => {
  if (category?.data?.files?.length > 0) {
    return category.data.files[0].url
  }
  else {
    return imgplaceholder
  }
}
const { data: categoriesData, loading, getAllCategories } = useCategory();


onMounted(()=>
{
  getAllCategories()
})
onUpdated(()=>{
  if(categoriesData.value.length < maxCategories) {
    maxCategories = categoriesData.value.length
  }
})
</script>
<template>
  <!-- Cathegories -->
  <section class="col-span-12 mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-3 lg:gap-5" 
  v-if="categoriesData.length > 0 && !loading">
    <router-link to="/" v-for="cId in maxCategories" :key="categoriesData[cId-1]?.name">
      <div class="relative cursor-pointer">
        <img class="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100" :src="checkCategoryImage(categoriesData[cId-1])"
          alt="bedroom cathegory image" />

        <p
          class="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl">
          {{ categoriesData[cId-1]?.name }}
        </p>
      </div>
    </router-link>
  </section>
  <!-- /Cathegories -->
</template>