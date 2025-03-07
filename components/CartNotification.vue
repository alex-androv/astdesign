<template>
  <div
    v-if="isVisible"
    class="fixed bottom-28 right-10 bg-pink-600 text-white p-6 text-sm rounded-2xl shadow-lg z-50"
  >
    Товар добавлен в корзину
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useApplicationStore } from "~/store/application";

const store = useApplicationStore();
const isVisible = ref<boolean>(false);

watch(
  () => store.showNotification,
  (newValue: boolean) => {
    if (newValue) {
      isVisible.value = true;
      setTimeout(() => {
        isVisible.value = false;
      }, 2000);
    }
  }
);
</script>
