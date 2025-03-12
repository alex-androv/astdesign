<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-grow flex items-center justify-center">
      <slot />
    </main>
    <AppFooter />
    <CartNotification />
  </div>
</template>

<script setup lang="ts"></script>
