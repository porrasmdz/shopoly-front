<script lang="ts" setup> 

import {logo_light, logo_dark} from "@/constants/assets.ts"
const isDarkMode = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}
</script>
<template>
    <img v-if="isDarkMode()" class="cursor-pointer sm:h-auto sm:w-auto"
                :src="logo_dark" alt="company logo" />
            <img v-else class="cursor-pointer sm:h-auto sm:w-auto" :src="logo_light"
                alt="company logo" />
</template>