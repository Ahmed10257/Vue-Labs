import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import ProductsList from "./components/ProductsList.vue";
import store from "./Store.js";
import ProductDetails from "./components/productDetails.vue";
import AddProduct from "./components/addProduct.vue";
import EditProduct from "./components/editProduct.vue";
import myCart from "./components/myCart.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/products",
    component: ProductsList,
  },
  {
    path: "/products/:id",
    component: ProductDetails,
  },
  {
    path: "/products/add",
    component: AddProduct,
  },
  {
    path: "/products/edit/:id",
    component: EditProduct,
  },
  {
    path: "/cart",
    component: myCart,
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(store).mount("#app");
