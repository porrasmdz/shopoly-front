<script setup lang="ts">
import BaseButton from '../BaseButton.vue';
</script>
<template>
    <div class="">
        <div class="border py-5 px-4 shadow-md">
            <p class="font-bold">RESUMEN</p>

            <div class="flex justify-between border-b py-5">
                <p>Subtotal</p>
                <p>$1280</p>
            </div>

            <div class="flex justify-between border-b py-5">
                <p>Envío</p>
                <p>Gratis</p>
            </div>

            <div class="flex justify-between py-5">
                <p>Total</p>
                <p>$1280</p>
            </div>

            <router-link to="/checkout" class="block w-full h-12">
                <BaseButton :type="'secondary'" class="w-full py-2 px-5 h-10">Proceder al Pago</BaseButton>
                
            </router-link>
        </div>
    </div>
</template>