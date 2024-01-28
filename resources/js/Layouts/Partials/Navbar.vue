<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <NavLink v-for="item in navigation"
                               :key="item.name"
                               :name="item.name"
                               :component="item.component"
                               :href="item.href"
                             >
                            </NavLink>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </Disclosure>
</template>

<script setup>
import { Disclosure } from '@headlessui/vue' 
import NavLink from "@/Components/NavLink.vue";
import { Link } from "@inertiajs/vue3";

const navigation = [
    { name: 'Home', component: 'Home', href: '/'},
    { name: 'About', component: 'About', href: '/about'},
]

</script>
