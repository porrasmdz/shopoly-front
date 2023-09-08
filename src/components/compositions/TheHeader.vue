<script setup lang="ts">
import {logo_light, logo_dark} from "@/constants/assets.ts"
import BaseIcon from '@components/BaseIcon.vue';
import SearchBar from '@components/SearchBar.vue';
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
const headerRoutes = {
    wishlist: { route: "/wishlist", icon: 'heart', text: "Wishlist" },
    cart: { route: "/cart", icon: 'cart', text: "Cart" },
    profile: { route: "/profile", icon: 'profile', text: "Account" }

}
const mobileRoutes = {
    home: { route: "/", text: "Home" },
    catalog: { route: "/catalog", text: "Catalog" },
    about: { route: "/about", text: "About Us" },
    contact: { route: "/contact", text: "Contact Us" }

}

const isDarkMode = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}
</script>
<template>
    <!-- Header -->
    <header class="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-5">
        <router-link to="/">
            
            <img v-if="isDarkMode()" class="cursor-pointer sm:h-auto sm:w-auto"
                :src="logo_dark" alt="company logo" />
            <img v-else class="cursor-pointer sm:h-auto sm:w-auto" :src="logo_light"
                alt="company logo" />

        </router-link>

        <div class="md:hidden">
            <button @click="mobileMenuOpen = !mobileMenuOpen">
                <BaseIcon icon="hamburger" />
            </button>
        </div>

        <SearchBar class="hidden w-2/5 md:flex" />
        <div class="hidden gap-3 md:!flex">
            <router-link v-for="(option, index) in headerRoutes" :key="`${option.route}-${index}`" :to="option.route"
                class="relative flex cursor-pointer flex-col items-center justify-center">
                <span v-if="option.route === '/profile'" class="absolute bottom-[33px] right-1 flex h-2 w-2">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                </span>
                <BaseIcon :icon="option.icon" />


                <p class="text-xs">{{ option.text }}</p>
            </router-link>
        </div>
    </header>
    <!-- /Header -->

    <!-- Burger menu  -->
    <section v-show="mobileMenuOpen"
        class="absolute left-0 right-0 z-50 h-screen w-full bg-white dark:bg-black text-black dark:text-white">
        <div class="mx-auto">
            <div class="mx-auto flex w-full justify-center gap-3 py-4">
                <router-link v-for="(option, index) in headerRoutes" :key="`${option.route}-${index}`"
                    @click="mobileMenuOpen = false" :to="option.route"
                    class="relative flex cursor-pointer flex-col items-center justify-center">
                    <span v-if="option.route === '/profile'" class="absolute bottom-[33px] right-1 flex h-2 w-2">
                        <span
                            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                        <span class="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                    </span>
                    <BaseIcon :icon="option.icon" />

                    <p class="text-xs">{{ option.text }}</p>
                </router-link>
            </div>
            <SearchBar class="my-4 mx-5" />

            <ul class="text-center font-medium">
                <li v-for="(option, index) in mobileRoutes" @click="mobileMenuOpen = false"
                    :key="`${option.route}-${index}`" class="py-2">
                    <router-link :to="option.route">{{ option.text }}</router-link>
                </li>

            </ul>
        </div>
    </section>
<!-- /Burger menu  -->
</template>