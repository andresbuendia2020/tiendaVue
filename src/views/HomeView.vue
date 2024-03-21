<script setup>
import HomePage from '@/components/HomePage.vue'
</script>
<template>
  <h1>Lista de Productos</h1>
  <div class="product-list">
    <HomePage />
  </div>
</template>
<style>
/* Estilos para los controles de filtro */
.filters {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.filter-group {
  margin-right: 20px;
}

.filter-group label {
  margin-right: 5px;
}

.filter-group input,
.filter-group select {
  padding: 5px;
  margin-right: 10px;
}

/* Estilos para la lista de productos */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* Grid de columnas auto-ajustables */
  gap: 20px;
  /* Espacio entre los elementos del grid */
}

.product-item {
  display: flex;
}

/* Estilos para las tarjetas de producto */
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  /* Efecto de levantamiento al pasar el mouse */
}

.product-thumbnail img {
  max-width: 100%;
  height: auto;
}

.product-details {
  padding: 20px;
}

.product-details h2 {
  margin-top: 0;
}

.product-details p {
  margin: 5px 0;
}
</style>