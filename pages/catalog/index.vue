<template>
  <div class="container mx-auto py-8 px-5">
    <h1 class="text-3xl font-bold mb-6 pl-6">Тестовая задача</h1>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
    >
      <ProductCard
        v-for="product in products"
        :key="product.url"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useApplicationStore } from "~/store/application";
import type { Product } from "~/types/product";

const store = useApplicationStore();

const { data: products } = await useFetch<Product[]>("/api/products");

onMounted(() => {
  if (products.value) {
    store.updateProductsCount(products.value.length);
  }
});
</script>
