<script lang="ts" setup>

// @ts-nocheck
import { logo_light, logo_dark } from "@/constants/assets.ts"
import { computed } from "vue";

const props = defineProps<{
    size?: 'auto' | 'lg'
}>()

const isDarkMode = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}
const size = computed(() => {
    if (props.size == 'lg') {
        return 'w-[200px]'
    }
    return 'sm:h-auto sm:w-auto'
});

</script>
<template>
    <img v-if="isDarkMode()" :src="logo_dark" :class="size" alt="company logo" />
    <img v-else :class="size" :src="logo_light" alt="company logo" />
</template>