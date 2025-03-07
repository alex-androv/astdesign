<template>
  <div class="container flex items-center justify-center">
    <NuxtLink
      :to="path.catalog"
      class="text-3xl text-pink-600 hover:text-pink-700 underline font-medium inline-flex items-center"
    >
      Перейти в раздел каталога
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { path } from "~/utils/path";
</script>
