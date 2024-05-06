<template>
  <div>
    <div class="container">
      <h1 class="text-center mt-5">Products List</h1>
      <div class="row mt-5">
        <div
          v-for="product in products"
          :key="product.id"
          class="col-md-4 mb-4"
        >
          <div class="card">
            <router-link :to="`/products/${product.id}`">
              <div class="Fixed-height">
                <img :src="product.images[0]" class="card-img-top" alt="..." />
              </div>
            </router-link>
            <div class="card-body CardHeight">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text fw-bold">Price: {{ product.price }} $</p>
            </div>
            <div class="d-flex justify-content-around mb-3">
              <!-- <button class="btn btn-success" @click="AddToCart(product.id)">
                Add to Cart
              </button> -->
              <button class="btn btn-warning" @click="EditProduct(product.id)">
                Edit
              </button>
              <button class="btn btn-danger" @click="DeleteProduct(product.id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import { useRouter } from "vue-router";

export default {
  name: "ProductsList",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    let products = computed(() => store.state.Products);
    console.log(products);

    const AddToCart = (id) => {
      console.log("Add to cart", id);
    };

    const EditProduct = (id) => {
      router.push(`/products/edit/${id}`);
    };

    const DeleteProduct = (id) => {
      store.dispatch("deleteProduct", id);
    };
    onMounted(() => {
      store.dispatch("getProducts");
    });

    return {
      products,
      AddToCart,
      EditProduct,
      DeleteProduct,
    };
  },
};
</script>

<style scoped>
.Fixed-height {
  height: 200px;
  overflow: hidden;
}

.CardHeight {
  height: 300px;
}
</style>
