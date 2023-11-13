<script setup lang="ts">
import TheBreadcrumbs from '@/components/compositions/TheBreadcrumbs.vue';
import CatalogTable from '@/components/compositions/CatalogTable.vue';
import { useItem } from '@/composables/useItem';


const { data: productsData, loading, totalPages } = useItem();

</script>
<template>
    <TheBreadcrumbs class="col-span-12" />
    <CatalogTable class="col-span-12" :catalog-products="productsData" :loading="loading" :pages="totalPages" />
</template>