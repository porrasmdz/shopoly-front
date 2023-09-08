<script setup lang="ts">
    import CompanyLogo from '@components/CompanyLogo.vue';
    import GroupedLinks from '@components/compositions/GroupedLinks.vue';
    import {linkedin, linkedin_dark, github, github_dark, telegram, telegram_dark} from '@/constants/assets';
    
    const socialNetworks =() => (isDarkMode() ? [
        {image: linkedin_dark, link: "https://github.com/bbulakh"},
        {image: github_dark, link: "https://t.me/b_bulakh"},
        {image: telegram_dark, link: "https://www.linkedin.com/in/bogdan-bulakh-393284190/"}
    ] : [ {image: linkedin, link: "https://github.com/bbulakh"},
        {image: github, link: "https://t.me/b_bulakh"},
        {image: telegram, link: "https://www.linkedin.com/in/bogdan-bulakh-393284190/"}])

    const footerGroups = [
        {
            title: 'Features',
            links: [{route: '/', name: 'Marketing'}, {route: '/', name: 'Commerce'}, {route: '/', name: 'Analytics'},{route: '/', name: 'Merchandise'}]
        },
        {
            title: 'Support',
            links: [{route: '/', name: 'Pricing'}, {route: '/', name: 'Docs'}, {route: '/', name: 'Audition'}, {route: '/', name: 'Art Status'}]
        },
        {
            title: 'Documents',
            links: [{route: '/', name: 'Terms'}, {route: '/', name: 'Conditions'}, {route: '/', name: 'Privacy'}, {route: '/', name: 'License'}]
        },
        {
            title: 'Delivery',
            links: [{route: '/', name: 'List of Countries'}, {route: '/', name: 'Special Information'}, {route: '/', name: 'Restrictions'}, {route: '/', name: 'Payment'}]
        }
    
    ]

    
    const isDarkMode = () => {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }
</script>
<template>
    
    <footer
      class="mx-auto w-full max-w-[1200px] justify-between pb-10 flex flex-col lg:flex-row"
    >
      <div class="ml-5">
        <CompanyLogo />
        <p class="pl-0">

          Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit.
        </p>
        <div class="mt-10 flex gap-3">
          <a :href="socialnwk.link" v-for="(socialnwk) in socialNetworks()" :key="socialnwk.link">
            <img
              class="h-5 w-5 cursor-pointer"
              :src="socialnwk.image"
              alt="social network icon"
            />
          </a>
         
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <GroupedLinks v-for="(group,index) in footerGroups" :key="`${group.title}-${index}`" :title="group.title" :links="group.links" />

      </div>
    </footer>
    <!-- /Desktop Footer  -->

</template>