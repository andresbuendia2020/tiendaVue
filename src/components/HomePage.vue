<script setup>
import { useProduct } from '@/composables/useProduct';
import FilterStore from '@/components/FilterStore.vue';
import ListProducts from '@/components/ListProducts.vue';
import { onMounted } from 'vue';

const {
  filters,
  categories,
  brands,
  filteredProducts,
  navigateToProductDetail,
  getProducts, addToProductCart
} = useProduct();

const updateFilters = value => filters.value = value;

onMounted(getProducts)
</script>

<template>
  <FilterStore @update-filters="updateFilters" :filters="filters" :brands="brands" :categories="categories" />
  <ListProducts :filteredProducts="filteredProducts" :navigateToProductDetail="navigateToProductDetail"
    :addToProductCart="addToProductCart"></ListProducts>
</template>