<script setup lang="ts">
import BaseIcon from '@components/BaseIcon.vue';
const badges =[
    {
        icon: 'truck',
        title:'Free Delivery',
        subtitle:'Orders from $20',
    },
    
    {
        icon: 'money',
        title:'Money Returns',
        subtitle:'30 Days guarantee',
    
    },
    
    {
        icon: 'help',
        title:'24/7 Supports',
        subtitle:'Consumer support',
    
    }
]
</script>
<template>
    <!-- Cons bages -->
    <section
      class="col-span-12 container mx-auto my-8 flex flex-col justify-center gap-3 lg:flex-row"
    >
      <!-- 1 -->

      <div
      v-for="badge in badges" :key="`${badge.title}-${badge.subtitle}`"
        class="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5"
      >
        <div class="">
            <BaseIcon :icon="badge.icon"/>
        </div>

        <div class="ml-6 flex flex-col justify-center">
          <h3 class="text-left text-xs font-bold lg:text-sm">{{ badge.title }}</h3>
          <p class="text-light text-center text-xs lg:text-left lg:text-sm">
            {{ badge.subtitle }}
          </p>
        </div>
      </div>

     
    </section>

</template>