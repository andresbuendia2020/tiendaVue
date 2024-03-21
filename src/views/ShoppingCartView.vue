<script setup>
import CartProductPage from '@/components/CartProductPage.vue'
</script>

<template>
    <CartProductPage/>
</template>

<style>
.product-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  flex-direction: column;
}

.product-thumbnail img {
  max-width: 100px;
  height: auto;
  margin-right: 20px;
}

.product-details h4 {
  margin-top: 0;
}

.delete-button {
  background-color: red;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>