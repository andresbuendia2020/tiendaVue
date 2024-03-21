<!-- <script setup>
import { useProduct } from '@/composables/useProduct';
import { onMounted } from 'vue';
import ListProducts from '@/components/ListProducts.vue';

const {cart,getProductCart,navigateToProductDetail}= useProduct()

onMounted(getProductCart)
</script>

<template>
<ListProducts :filteredProducts="cart.products" :navigateToProductDetail="navigateToProductDetail"/>
</template> -->
<template>
    <div>
      <h2>Carrito de Compras</h2>
      <div v-if="cartProducts.length > 0" class="product-grid">
        <div v-for="cart in cartProducts" :key="cart.id" class="product-item">
          <div v-for="product in cart.products" :key="product.id" class="product-card">
            <div class="product-thumbnail">
              <img :src="product.thumbnail" :alt="product.title" />
            </div>
            <div class="product-details">
              <h3>{{ product.title }}</h3>
              <p>Precio: ${{ product.price }}</p>
              <p>Cantidad: {{ product.quantity }}</p>
              <button @click="handleDeleteProduct(cart.id, product.id)" class="delete-button">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>El carrito está vacío</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useProduct } from '@/composables/useProduct';
  import { ref, onMounted } from 'vue';
  
  const { getProductCart, deleteProductFromCart } = useProduct();
  const cartProducts = ref([]);
  
  const refreshCart = async () => {
    try {
      const carts = await getProductCart();
      cartProducts.value = carts;
    } catch (error) {
      console.error('Error al obtener el carrito de compras:', error);
    }
  };
  
  onMounted(refreshCart);
  
  const handleDeleteProduct = async (cartId, productId) => {
    try {
      await deleteProductFromCart(cartId, productId);
      await refreshCart(); // Actualizar los datos del carrito después de eliminar el producto
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
    }
  };
  </script>
  

  
  