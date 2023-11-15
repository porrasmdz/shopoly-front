<script setup lang="ts">
// import { ISubsidiary } from "@/interfaces/ISubsidiary.ts";
import ContactSections from "@/components/compositions/ContactSections.vue";

import { views } from "@assets/settings.json"

// import SubsidiaryCard from "@components/SubsidiaryCard.vue"
// import ContactHero from "@/components/compositions/ContactHero.vue";
// import ContactForm from "@/components/compositions/ContactForm.vue";

// const subsidiaries: (ISubsidiary)[] = [
//   {
//     name: "Sucursal Gye",
//     email: "sucursal@delivery.org",
//     phone_number: "+8(911)339-88-88",
//     ws_number: "+8(911)339-88-88",
//     telegram_account: "@sucrusal"
//   },
//   {
//     name: "Sucursal Sauces",
//     email: "sucursal@delivery.org",
//     phone_number: "+8(911)339-88-88",
//     ws_number: "+8(911)339-88-88",
//     telegram_account: "@sucrusal"
//   },
//   {
//     name: "Sucursal La Joya",
//     email: "sucursal@delivery.org",
//     phone_number: "+8(911)339-88-88",
//     ws_number: "+8(911)339-88-88",
//     telegram_account: "@sucrusal"
//   }
// ];
</script>
<template>
  <ContactSections v-for="(section, index) in views.contact.sections" :key="`${section.type}-${index}`" 
  :section="section"></ContactSections>
</template>