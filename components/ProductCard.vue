<template>
  <div
    class="relative bg-white px-6 pt-6 transition-all duration-200 z-0"
    :class="{ 'shadow-lg z-10': isHovered }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div
      v-if="discount"
      class="absolute top-2 left-2 bg-pink-100 text-pink-700 px-2 py-1 text-xs rounded"
    >
      -{{ discount }}%
    </div>

    <div class="aspect-square overflow-hidden mb-3 rounded-lg">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="mb-1">
      <div class="flex items-baseline">
        <span class="font-bold">{{ formatPrice(product.newPrice) }} ₽</span>
        <span
          v-if="product.oldPrice"
          class="text-gray-400 text-sm line-through ml-2"
        >
          {{ formatPrice(product.oldPrice) }} ₽
        </span>
      </div>
    </div>

    <div class="uppercase font-semibold text-xs mb-1">{{ product.brand }}</div>

    <div class="text-sm line-clamp-2 mb-3">{{ product.name }}</div>

    <div
      v-show="isHovered"
      class="absolute bottom-0 left-0 right-0 bg-white pb-6 px-6 rounded-b shadow-lg transform translate-y-full"
    >
      <div class="flex justify-start">
        <button
          @click="addToCart"
          class="bg-black text-white py-3 px-6 text-sm font-medium rounded-lg cursor-pointer"
        >
          В корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { Product } from "~/types/product";

interface Props {
  product: Product;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  addToCart: [product: Product];
}>();

const isHovered = ref<boolean>(false);

const discount = computed<number | null>(() => {
  if (!props.product.oldPrice) return null;

  const discount = Math.round(
    100 - (props.product.newPrice / props.product.oldPrice) * 100
  );
  return discount;
});

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("ru-RU").format(price);
};

const addToCart = (): void => {
  emit("addToCart", props.product);
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
