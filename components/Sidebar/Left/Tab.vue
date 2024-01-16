<template>
    <NuxtLink :to="active ? '/' : '#'"
        class="flex items-center py-3 px-4 text-black rounded-full w-min hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white"
        :class="defaultTransition">

        <div class="size-6 text-dark">
            <slot name="icon"></slot>
        </div>

        <div class="hidden ml-4 text-lg lg:block" :class="textClasses">
            <slot name="name"></slot>
        </div>

    </NuxtLink>
</template>
<script setup>
const { defaultTransition } = useTailwindConfig()

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})

const textClasses = computed(() => props.active ? 'font-semibold' : 'font-normal')



</script>
