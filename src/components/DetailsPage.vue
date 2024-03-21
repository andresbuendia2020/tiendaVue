<script setup>
import { useProduct } from '@/composables/useProduct';
import { onMounted } from 'vue';

const {
  getProductsById,
  product
} = useProduct();

onMounted(getProductsById)
</script>

<template>
    <div v-if="product" class="product-detail">
        <h1>Detallado</h1>
      <div class="product-card">
        <h1>{{ product.title }}</h1>
        <div class="product-images">
          <img v-for="(image, index) in product.images" :key="index" :src="image" :alt="'Imagen ' + (index + 1)">
        </div>
        <p>Descripción:{{ product.description }}</p>
        <p>Precio: {{ product.price }}</p>
        <p>Descuento: {{ product.discountPercentage }}%</p>
        <p>Calificación: {{ product.rating }}</p>
        <p>Stock: {{ product.stock }}</p>
        <p>Marca: {{ product.brand }}</p>
        <p>Categoría: {{ product.category }}</p>
      </div>
    </div>
    <div v-else>
      <p>Cargando...</p>
    </div>
</template>

<style scope>
.product-images {
    display: flex;
    flex-wrap: wrap;
}

.product-detail {
    padding: 20px;
}

.product-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    padding: 20px;
    max-width: 40vw;
    margin: auto;
    text-align: justify;
}

.product-card h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.product-card p {
    margin-bottom: 5px;
}

.product-card p:first-child {
    font-weight: bold;
}

.product-card img {
    max-width: 50%;
    height: auto;
    margin-bottom: 10px;
}
</style>