import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';
import ShoppingCartView from '@/views/ShoppingCartView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/product/:id', component: ProductDetailView, name: 'productDetail' },
  { path: '/cart', component: ShoppingCartView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
