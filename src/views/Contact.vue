<script setup lang="ts">
import { ISubsidiary } from "@/interfaces/ISubsidiary.ts";
import SubsidiaryCard from "@components/SubsidiaryCard.vue"
import ContactHero from "@/components/compositions/ContactHero.vue";
import ContactForm from "@/components/compositions/ContactForm.vue";

const subsidiaries : (ISubsidiary)[] = [
  {
    name: "Sucursal Gye",
    email: "sucursal@delivery.org",
    phone_number: "+8(911)339-88-88",
    ws_number: "+8(911)339-88-88",
    telegram_account: "@sucrusal"
  },
  {
    name: "Sucursal Sauces",
    email: "sucursal@delivery.org",
    phone_number: "+8(911)339-88-88",
    ws_number: "+8(911)339-88-88",
    telegram_account: "@sucrusal"
  },
  {
    name: "Sucursal La Joya",
    email: "sucursal@delivery.org",
    phone_number: "+8(911)339-88-88",
    ws_number: "+8(911)339-88-88",
    telegram_account: "@sucrusal"
  }
];
</script>
<template>
    <ContactHero class="col-span-12"/>

    <section class="col-span-12 w-full flex-grow">
        <section
          class="mx-auto w-full my-6 grid max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 lg:grid-cols-3 lg:pt-10"
        >
          <SubsidiaryCard v-for="subsidiary in subsidiaries" :key="subsidiary.name" :subsidiary="subsidiary" />

          
        </section>

        <!-- Contact section  -->

        <section class="mx-auto my-5 text-center">
          <h2 class="text-3xl font-bold">¿Aún Tienes Dudas?</h2>
          <p>Llena el formulario y te responderemos en la mayor brevedad posible</p>
        </section>

          <ContactForm />
        <!-- /Form  -->
      </section>
</template>