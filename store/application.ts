import { defineStore } from "pinia";
import { ref } from "vue";
import type { Product } from "types/product";

export const useApplicationStore = defineStore("application", () => {
  const showNotification = ref<boolean>(false);
  const productsCount = ref<number>(0);

  function showCartNotification(): void {
    showNotification.value = true;
    setTimeout(() => {
      showNotification.value = false;
    }, 2000);
  }

  const handleAddToCart = (product: Product): void => {
    showCartNotification();
    // В будущем здесь можно реализовать добавление товара в корзину
    console.log("Добавлен товар:", product.name);
  };

  function updateProductsCount(count: number): void {
    productsCount.value = count;
  }

  return {
    showNotification,
    productsCount,
    showCartNotification,
    updateProductsCount,
    handleAddToCart,
  };
});
