<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader :productsCount="store.productsCount" />
    <main class="flex-grow flex items-center justify-center">
      <slot />
    </main>
    <AppFooter />
    <CartNotification :show="store.showNotification" />
  </div>
</template>

<script setup lang="ts">
import { useApplicationStore } from "~/store/application";

const store = useApplicationStore();
</script>
