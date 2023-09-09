<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    label: string,
    total: number
}>()
const isSelected = ref<boolean>(false);
</script>
<template>
    <div class="flex justify-between items-center w-full cursor-pointer" @click="isSelected = !isSelected">
        <div class="flex justify-center items-center">
            <input type="checkbox" v-model="isSelected"/>
            <p class="ml-4">{{ label }}</p>
        </div>
        <div>
            <p class="text-gray-500">({{ total }})</p>
        </div>

    </div>
</template>