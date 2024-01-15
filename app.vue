<template>
  <div :class="{'dark': darkMoke}">

    <div class="bg-white dark:bg-dim-900">

    
   <div class="min-h-full">

    <!-- layouts -->
    <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
      

      <!-- left sidebar -->
      <div class=" hidden md:block xs:col-span-1 lg:col-span-2">
        <div class="sticky top-0">

          <SidebarLeft />
        </div>
      </div>



      <!-- content -->


      <!-- right sidebar -->
    </div>

   </div>

  </div>
  </div>
</template>

<script setup>

const darkMoke = ref(false)
</script>
