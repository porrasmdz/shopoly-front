<script setup lang="ts">
import CompanyLogo from '@components/CompanyLogo.vue';
import { mission_familyp, mission_interiorp, mission_materialsp } from "@/constants/assets"
</script>
<template>
    <section class="col-span-12 flex-grow">
        <div class="mt-6 flex flex-col gap-3">
            <CompanyLogo class="mx-auto" :size="'lg'" />
            <p class="text-center text-sm">Desde 1999</p>
        </div>

        <div class="mx-auto my-10 flex max-w-[600px] flex-col items-center justify-center px-5">
            <h2 class="w-full text-left text-xl font-bold">Nuestra Misión:</h2>
            <p class="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                placeat odit, est eum dolorem esse totam iusto necessitatibus
                eligendi illo doloribus vero aperiam atque tempora repudiandae
                molestiae nemo distinctio quisquam!
            </p>
            <div class="grid grid-cols-1 gap-3 lg:grid-cols-3">
                <img class="object-cover" :src="mission_familyp" alt="Family in living room" />
                <img class="object-cover" :src="mission_interiorp" alt="Interior" />
                <img class="object-cover" :src="mission_materialsp" alt="Materials" />
            </div>
            <p class="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                placeat odit, est eum dolorem esse totam iusto necessitatibus
                eligendi illo doloribus vero aperiam atque tempora repudiandae
                molestiae nemo distinctio quisquam!
            </p>

            <h2 class="mt-3 w-full text-left text-xl font-bold">Nuestra Visión:</h2>
            <p class="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                placeat odit, est eum dolorem esse totam iusto necessitatibus
                eligendi illo doloribus vero aperiam atque tempora repudiandae
                molestiae nemo distinctio quisquam!
            </p>

            <h2 class="mt-3 w-full text-left text-xl font-bold">Valores:</h2>
            <p class="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                placeat odit, est eum dolorem esse totam iusto necessitatibus
                eligendi illo doloribus vero aperiam atque tempora repudiandae
                molestiae nemo distinctio quisquam!
            </p>
            <div class="grid grid-cols-1 gap-3 lg:grid-cols-3">
                <img class="object-cover" :src="mission_familyp" alt="Family in living room" />
                <img class="object-cover" :src="mission_interiorp" alt="Interior" />
                <img class="object-cover" :src="mission_materialsp" alt="Materials" />
            </div>
        </div>
    </section>
</template>