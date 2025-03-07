import { defineStore } from "pinia";
import { ref } from "vue";

export const useApplicationStore = defineStore("application", () => {
  const showNotification = ref<boolean>(false);
  const productsCount = ref<number>(0);

  function showCartNotification(): void {
    showNotification.value = true;
    setTimeout(() => {
      showNotification.value = false;
    }, 2000);
  }

  function updateProductsCount(count: number): void {
    productsCount.value = count;
  }

  return {
    showNotification,
    productsCount,
    showCartNotification,
    updateProductsCount,
  };
});
