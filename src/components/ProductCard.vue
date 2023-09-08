<script setup lang="ts">
import BaseIcon from '@components/BaseIcon.vue';
import BaseButton from '@components/BaseButton.vue';
defineProps<{
  product: {
    image: string,
    name: string,
    price: number,
    discount: number,
    stars: number,
    reviews: number
  }
}>()
</script>
<template>
  <div class="flex flex-col">
    <div class="relative flex">
      <img class="" :src="product.image" :alt="`${product.name} image`" />
      <div class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100">
        <router-link to="/product-detail">
          <span class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400">
            <BaseIcon icon="search-alt" />
          </span>
        </router-link>
        <span class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400">
          <BaseIcon icon="heart-filled" />
        </span>
      </div>

      <div class="absolute right-1 mt-3 flex items-center justify-center bg-amber-400">
        <p class="px-2 py-2 text-sm">&minus; {{ ( (1- ((product.price - product.discount) / product.price))*100).toFixed(0) }}&percnt; OFF</p>
      </div>
    </div>

    <div>
      <p class="mt-2 text-black dark:text-white uppercase">{{ product.name }}</p>
      <p class="font-medium text-violet-900">
        <span>
          ${{ (product.price - product.discount).toFixed(2) }}
        </span>
        <span class="ml-1 text-sm text-gray-500 line-through">${{ product.price.toFixed(2) }}</span>
      </p>

      <div class="flex items-center">
        <BaseIcon icon="star-filled" v-for="star in product.stars" :key="`${product.name}-star-${star}`" />
        <BaseIcon icon="star-empty" v-for="star in (5 - product.stars)" :key="`${product.name}-emptystar-${star}`" />

        <p class="text-sm text-gray-400">({{ product.reviews }})</p>
      </div>

      <div>
        <BaseButton type="secondary" class="my-5 h-10 w-full text-white">
          Add to cart
        </BaseButton>
      </div>
    </div>
  </div>
</template>