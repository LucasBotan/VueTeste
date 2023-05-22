import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DonationView from '../views/DonationView.vue';
import FAQView from '../views/FAQView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/doe',
    name: 'donation',
    component: DonationView,
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
