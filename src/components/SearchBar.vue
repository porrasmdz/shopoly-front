<script setup lang="ts">
import BaseIcon from '@components/BaseIcon.vue';
import BaseButton from '@components/BaseButton.vue';
</script>
<template>
    <form class="flex items-center h-9 border dark:border-gray-400">
        <BaseIcon :icon="'search'"></BaseIcon>

        <input class="hidden w-11/12 outline-none md:block bg-transparent" type="search" placeholder="Search" />

        <BaseButton class="h-full ml-auto">
            Search
        </BaseButton>
    </form>
</template>