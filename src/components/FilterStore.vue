<script setup>
import { ref, watch } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props  = defineProps({
    categories: {
      type: Object,
      required: true
    },
    brands: {
      type: Object,
      required: true
    },
    filters: {
      type: Object,
      required: true
    },
})

const filters = ref(props.filters);
const emmit = defineEmits(['update-filters']);

watch(filters,(newValue)=>{
    emmit("update-filters", newValue)
})
</script>
<template>
    <div class="filters">
        <div class="filter-group">
            <label for="price">Precio:</label>
            <input type="number" id="price" v-model="filters.price" placeholder="Ingrese precio máximo">
        </div>

        <div class="filter-group">
            <label for="discount">Descuento (%):</label>
            <input type="number" id="discount" v-model="filters.discountPercentage"
                placeholder="Ingrese descuento mínimo">
        </div>

        <div class="filter-group">
            <label for="rating">Calificación:</label>
            <input type="number" id="rating" v-model="filters.rating" step="0.1"
                placeholder="Ingrese calificación mínima">
        </div>

        <div class="filter-group">
            <label for="stock">Stock:</label>
            <input type="number" id="stock" v-model="filters.stock" placeholder="Ingrese stock mínimo">
        </div>

        <div class="filter-group">
            <label for="brand">Marca:</label>
            <select id="brand" v-model="filters.brand">
                <option value="">Seleccionar Marca</option>
                <option v-for="brand in brands" :value="brand" :key="brand">{{ brand }}</option>
            </select>
        </div>

        <div class="filter-group">
            <label for="category">Categoría:</label>
            <select id="category" v-model="filters.category">
                <option value="">Seleccionar Categoría</option>
                <option v-for="category in categories" :value="category" :key="category">{{ category }}</option>
            </select>
        </div>
    </div>
</template>