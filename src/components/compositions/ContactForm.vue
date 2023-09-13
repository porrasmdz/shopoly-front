<script setup lang="ts">
import BaseInput from '@components/BaseInput.vue';
import BaseCheckbox from '@components/BaseCheckbox.vue';
import BaseButton from '@components/BaseButton.vue';
import BaseSelect from '@components/BaseSelect.vue';
const options = [
    {
        value: '',
        text: 'Please choose a category'
    },
    {
        value: 'delivery',
        text: 'Delivery'
    }, {
        value: 'support',
        text: 'Support'
    }, {
        value: 'profile',
        text: 'Profile'
    }, {
        value: 'careers',
        text: 'Careers'
    }, {
        value: 'another',
        text: 'Another'
    }]
</script>
<template>
    <!-- Form  -->

    <form class="mx-auto my-5 max-w-[600px] px-5 pb-10" action="">
        <div class="mx-auto">
            <div class="my-3 flex w-full gap-2">
                <BaseInput class="w-1/2" type="email" placeholder="E-mail" />
                <BaseInput class="w-1/2" type="text" placeholder="Full Name" />

            </div>
        </div>

        <BaseSelect :options="options" />


        <BaseInput :is-text-area="true" class="w-full" placeholder="Let us know what you think in the comments...">
        </BaseInput>

        <div class="lg:items:center container mt-4 flex flex-col justify-between lg:flex-row">
            <div class="flex items-center">
                <BaseCheckbox>
                    I have read and agree with
                    <router-link to="#" class="text-violet-900">terms &amp; conditions</router-link>

                </BaseCheckbox>

            </div>
            <BaseButton :type="'primary'" class="my-3 px-4 py-2 lg:my-0">
                Send Message
            </BaseButton>
        </div>
    </form>
</template>