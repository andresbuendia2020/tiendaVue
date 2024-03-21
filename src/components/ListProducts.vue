<script setup>
import { defineProps } from 'vue';

defineProps({
    filteredProducts: {
        type: Object,
        required: true,
    },
    navigateToProductDetail: {
        type: Function,
        required: true,
    },
    addToProductCart: {
        type: Function,
        required: false,
    }
})
</script>

<template>
    <div class="product-grid">

        <div class="product-item" v-for="product in filteredProducts" :key="product.id">
            <div class="product-card">
                <div class="product-thumbnail">
                    <img :src="product.thumbnail" :alt="product.title">
                </div>
                <div class="product-details">
                    <router-link :to="{ name: 'productDetail', params: { id: product.id } }">
                        <h2>{{ product.title }}</h2>
                        <p>{{ product.description }}</p>
                        <p>Precio: {{ product.price }}</p>
                        <p>Descuento: {{ product.discountPercentage }}%</p>
                        <p>Stock: {{ product.stock }}</p>
                        <p>Categoría: {{ product.category }}</p>
                    </router-link>
                    <button @click="navigateToProductDetail(product.id)">Ver detalles</button>
                    <button v-if="addToProductCart" @click="addToProductCart(product)">Añadir al carrito</button>
                </div>
            </div>
        </div>

    </div>
</template>
