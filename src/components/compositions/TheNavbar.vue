<script setup lang="ts">

// @ts-nocheck
import { onMounted, ref } from 'vue';
import { bed, sleep, outdoor, sofa, kitchen, food, bed_dark, sleep_dark, outdoor_dark, sofa_dark, kitchen_dark, food_dark } from '@/constants/assets.ts'
import BaseIcon from '@components/BaseIcon.vue';
import BaseButton from '@components/BaseButton.vue';
import { ILink } from '@/interfaces/ILink';

const desktopMenuOpen = ref(false);
const activeCategory = ref<'bedroomc' | 'mattrassc' | 'outdoorc' | 'sofac' | 'kitchenc' | 'livingc'>("bedroomc")

const navRoutes: Record<string, ILink> = {
    home: { route: "/", text: "Home" },
    catalog: { route: "/catalog", text: "Catalog" },
    about: { route: "/about", text: "About Us" },
    contact: { route: "/contact", text: "Contact Us" }

}


const categories = {
    "bedroomc": {
        icon: bed, text: "Bedroom", productlines: {
            "beds": { title: "Beds", products: ['Italian Bed', 'Queen-Size Bed', 'Wooden-Craft Bed', 'King-Size Bed'] },
            "lamps": { title: "Lamps", products: ['Italian Purple Lamp'] },
            "bedside_tables": { title: "Bedside Tables", products: ['Purple Table'] },
            "special": { title: "Special", products: ['Humidifier'] }
        }
    },
    "mattrassc": {
        icon: sleep, text: "Mattrass", productlines: {
            "hards": { title: "Hard", products: [] }

        }
    },
    "outdoorc": {
        icon: outdoor, text: "Outdoor", productlines: {
            "garden": { title: "Garden", products: [] }
        }
    },
    "sofac": {
        icon: sofa, text: "Sofa", productlines: {

            "sofa": { title: "Couches", products: [] }
        }
    },
    "kitchenc": {
        icon: kitchen, text: "Kitchen", productlines: {

            "utensils": { title: "Utensils", products: [] }
        }
    },
    "livingc": {
        icon: food, text: "Living Room", productlines: {

            "electric": { title: "Televisions", products: [] }
        }
    }

}

const isDarkMode = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

onMounted(() => {
    if (isDarkMode()) {
        categories['bedroomc']['icon'] = bed_dark
        categories['mattrassc']['icon'] = sleep_dark
        categories['kitchenc']['icon'] = kitchen_dark
        categories['livingc']['icon'] = food_dark
        categories['outdoorc']['icon'] = outdoor_dark
        categories['sofac']['icon'] = sofa_dark
    }
})
</script>
<template>
    <!-- Nav bar -->
    <!-- hidden on small devices -->

    <nav class="relative bg-violet-900 z-0">
        <div class="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex">
            <BaseButton @click="desktopMenuOpen = !desktopMenuOpen"
                class="ml-5 flex h-full w-40 cursor-pointer items-center justify-center bg-amber-400">
                <div class="flex justify-around" href="#">
                    <BaseIcon icon="hamburger" />
                    All categories
                </div>
            </BaseButton>

            <div class="mx-7 flex gap-8">
                <router-link v-for="(option, index) in navRoutes" :key="`${option.route}-${index}`"
                    class="font-light text-white duration-100 hover:text-yellow-400 hover:underline" :to="option.route">
                    {{ option.text }}
                </router-link>

            </div>

            <div class="ml-auto flex gap-4 px-5">
                <router-link class="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    to="/login">Login</router-link>

                <span class="text-white">&#124;</span>

                <router-link class="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    to="/signup">Sign
                    Up</router-link>
            </div>
        </div>
    </nav>
    <!-- /Nav bar -->

    <!-- Menu  -->
    <section v-show="desktopMenuOpen"
        class="absolute left-0 right-0 z-10 w-full border-b border-r border-l bg-white dark:bg-slate-800 dark:border-slate-900">
        <div class="mx-auto flex max-w-[1200px] py-10">
            <div class="w-[300px] border-r">
                <ul class="px-5">
                    <li v-for="(category, index) in categories" :key="`${category.text}-${index}`"
                        @click="activeCategory = index"
                        class="cursor-pointer active:blue-900 flex items-center gap-2 py-2 px-3 hover:bg-neutral-100 dark:hover:bg-neutral-600 active:bg-amber-400 dark:active:bg-amber-400"
                        :class="`${index === activeCategory ? 'bg-amber-400' : ''}`">
                        <img :src="category.icon" alt="Bedroom icon" />
                        {{ category.text }}
                        <span class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                    </li>


                </ul>
            </div>

            <div class="flex w-full justify-between">
                <div class="flex gap-6">
                    <div class="mx-5" v-for="(productline, index) in categories[activeCategory]['productlines']"
                        :key="`${productline}-${index}`">
                        <p class="font-medium text-gray-500 uppercase">{{ productline.title }}</p>
                        <ul class="text-sm leading-8">
                            <li v-for="(product, index) of productline?.products"
                                :key="`${productline}-${product}-${index}`">
                                <router-link to="product-detail" @click="desktopMenuOpen = false">{{ product }}</router-link>
                            </li>

                        </ul>
                    </div>


                </div>
            </div>
        </div>
    </section>

    <!-- /Menu  -->
</template>