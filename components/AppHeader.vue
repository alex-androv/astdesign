<template>
  <header class="sticky top-0 bg-white py-4 px-6 z-10 w-full">
    <div class="container mx-auto flex justify-between items-center px-12">
      <NuxtLink
        to="/"
        class="text-3xl font-bold"
        >Brand Name</NuxtLink
      >
      <div class="flex items-center">
        <Icon
          name="material-symbols:shopping-basket-outline"
          class="mr-2 text-xl"
        />
        <span class="text-sm mt-1">{{ productsCount }} товаров</span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface Props {
  productsCount: number;
}

defineProps<Props>();
</script>

<style>
header {
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.1);
}
</style>
