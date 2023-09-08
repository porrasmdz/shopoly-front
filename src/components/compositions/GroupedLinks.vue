<script setup lang="ts">
defineProps<{
    title?: string,
    links: ({
        route: string,
        name: string
    })[]
}>();
</script>
<template>
    <div class="mx-5 mt-10">
        <p class="font-medium text-gray-500 uppercase">{{ title ?? 'Links' }}</p>
        <ul class="text-sm leading-8">
            <li v-for="(link, index) of links" :key="`${title}-${link}-${index}`"><router-link :to="link.route">
                    {{ link.name }}</router-link></li>

        </ul>
    </div>
</template>