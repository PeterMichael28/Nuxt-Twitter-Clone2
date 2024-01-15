<template>
<div class="flex flex-col">

    <!-- Search bar -->
    <div class="relative m-2">
            <div class="absolute flex items-center h-full pl-4 text-gray-600 cursor-pointer">
                <div class="w-6 h-6">
                    <SearchIcon @click="handleSearch" />
                </div>
            </div>
            <input v-model="search"
                class="flex items-center w-full pl-12 text-sm font-normal text-black bg-gray-200 border border-gray-200 rounded-full shadow dark:text-gray-100 dark:bg-dim-400 dark:border-dim-400 focus:bg-gray-100 dark:focus:bg-dim-900 focus:outline-none focus:border focus:border-blue-200 h-9"
                placeholder="Search tweet" type="text">
        </div>


</div>

</template>

<script setup>
import { SearchIcon } from '@heroicons/vue/outline';
const search = ref('')


function handleSearch() {
    useRouter().push({
        path: '/search',
        query: {
            q: search.value
        }
    })
}

</script>