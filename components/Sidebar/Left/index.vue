<template>
    <div class="flex flex-col h-screen">

        <!-- logo -->
        <div class="p-2 my-2 rounded-full hover:bg-blue-50 hover:rounded-full w-min dark:hover:bg-white/20" :class="defaultTransitionStyle">

            <NuxtLink to="/">
                <div class="size-8 ">
                    <LogoTwitter />
                </div>
            </NuxtLink>
        </div>


        <div class="mt-2 space-y-2">

<SidebarLeftTab active>
    <template v-slot:icon>
        <HomeIcon />
    </template>
    <template v-slot:name>
        Home
    </template>
</SidebarLeftTab>

<SidebarLeftTab>
    <template v-slot:icon>
        <HashtagIcon />
    </template>
    <template v-slot:name>
        Explore
    </template>
</SidebarLeftTab>


<SidebarLeftTab>
    <template v-slot:icon>
        <BellIcon />
    </template>
    <template v-slot:name>
        Notifications
    </template>
</SidebarLeftTab>


<SidebarLeftTab>
    <template v-slot:icon>
        <InboxIcon />
    </template>
    <template v-slot:name>
        Messages
    </template>
</SidebarLeftTab>

<SidebarLeftTab>
    <template v-slot:icon>
        <BookmarkIcon />
    </template>
    <template v-slot:name>
        Bookmarks
    </template>
</SidebarLeftTab>


<SidebarLeftTab>
    <template v-slot:icon>
        <DocumentTextIcon />
    </template>
    <template v-slot:name>
        Lists
    </template>
</SidebarLeftTab>


<SidebarLeftTab>
    <template v-slot:icon>
        <UserIcon />
    </template>
    <template v-slot:name>
        Profile
    </template>
</SidebarLeftTab>

<SidebarLeftTab>
    <template v-slot:icon>
        <DotsCircleHorizontalIcon />
    </template>
    <template v-slot:name>
        More
    </template>
</SidebarLeftTab>

<div class="hidden xl:block">
    <UIButton liquid size="lg">
        <span class="font-bold">
            Tweet
        </span>
    </UIButton>
</div>

<div class="block xl:hidden">
    <UIButton>
    <!-- <UIButton @on-click="emits('onTweet')"> -->
        <div class="w-6 h-6 font-bold">
            <PencilIcon />
        </div>
    </UIButton>
</div>

        </div>
    </div>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/solid"
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, DotsCircleHorizontalIcon, PencilIcon, ChevronDownIcon } from "@heroicons/vue/outline"


const { defaultTransitionStyle } = useTailwindConfig();
</script>


