import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

export const useProduct = () => {
  const products = ref([]);
  const cart = ref([]);
  const product = ref({});
  const filters = ref({
    price: null,
    discountPercentage: null,
    rating: null,
    stock: null,
    brand: "",
    category: "",
  });

  const router = useRouter();
  const route = useRoute();

  const navigateToProductDetail = (productId) => {
    router.push({ name: "productDetail", params: { id: productId } });
  };

  const filteredProducts = computed(() => {
    let filtered = products.value;

    if (filters.value.price !== null) {
      filtered = filtered.filter(
        (product) => product.price <= filters.value.price
      );
    }

    if (filters.value.discountPercentage !== null) {
      filtered = filtered.filter(
        (product) =>
          product.discountPercentage >= filters.value.discountPercentage
      );
    }

    if (filters.value.rating !== null) {
      filtered = filtered.filter(
        (product) => product.rating >= filters.value.rating
      );
    }

    if (filters.value.stock !== null) {
      filtered = filtered.filter(
        (product) => product.stock >= filters.value.stock
      );
    }

    if (filters.value.brand !== "") {
      filtered = filtered.filter(
        (product) => product.brand === filters.value.brand
      );
    }

    if (filters.value.category !== "") {
      filtered = filtered.filter(
        (product) => product.category === filters.value.category
      );
    }

    return filtered;
  });

  const brands = computed(() => [
    ...new Set(products.value.map((product) => product.brand)),
  ]);

  const categories = computed(() => [
    ...new Set(products.value.map((product) => product.category)),
  ]);

  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        products.value = data.products;
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  };
  const getProductsById = (id = route.params.id) => {
    fetch(`https://dummyjson.com/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        product.value = data;
      })
      .catch(() => {
        this.$router.go(-1);
      });
  };
  const addToProductCart = (product) => {
    fetch("https://dummyjson.com/carts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: 1,
        products: [{ id: product.id, quantity: 1 }],
      }),
    }).then((res) => res.json())
    .catch(() => {
      this.$router.go(-1);
    });
  };
  const getProductCart = async () => {
    try {
      const response = await fetch("https://dummyjson.com/carts");
      if (!response.ok) {
        throw new Error("Error al obtener los datos del carrito");
      }
      const data = await response.json();
      console.log(data); // Imprime los datos en la consola
      return data.carts;
    } catch (error) {
      console.error("Error al obtener el carrito de compras:", error);
      throw error;
    }
  };
  const deleteProductFromCart = async (cartId) => {
    try {
      const response = await fetch(`https://dummyjson.com/carts/${cartId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error al eliminar el producto del carrito');
      }
      const data = await response.json();
      console.log('Producto eliminado del carrito:', data);
      return data;
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
      throw error;
    }
  };
  
  
  
  
  
  
  
  

  return {
    filters,
    categories,
    brands,
    filteredProducts,
    navigateToProductDetail,
    getProducts,
    getProductsById,
    product,
    cart,
    addToProductCart,
    getProductCart,
    deleteProductFromCart
  };
};
