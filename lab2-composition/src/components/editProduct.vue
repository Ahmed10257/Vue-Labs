<template>
  <div>
    <div class="container">
      <h1 class="text-center mt-5">Edit Product</h1>
      <div class="row mt-5">
        <div class="col-md-6">
          <img :src="product.images[0]" class="img-fluid" alt="..." />
        </div>
        <div class="col-md-6">
          <form>
            <div class="mb-3 d-flex justify-content-center">
              <label for="title" class="form-label w-25">Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="product.title"
              />
            </div>
            <div class="mb-3 d-flex justify-content-center">
              <label for="description" class="form-label w-25"
                >Description</label
              >
              <textarea
                class="form-control"
                id="description"
                rows="3"
                v-model="product.description"
              ></textarea>
            </div>
            <div class="mb-3 d-flex justify-content-center">
              <label for="price" class="form-label w-25">Price</label>
              <input
                type="number"
                class="form-control"
                id="price"
                v-model="product.price"
              />
            </div>
            <div class="mb-3 d-flex justify-content-center">
              <label for="images" class="form-label w-25">Image URL</label>
              <input
                type="text"
                class="form-control"
                id="images"
                v-model="product.images[0]"
              />
            </div>
            <button type="submit" class="btn btn-primary" @click="Edit()">
              Edit Product
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "EditProduct",
  setup() {
    const store = useStore();
    const router = useRouter();
    // Getting all products and filtering the required product
    let products = store.state.Products;
    // console.log(products);
    // Getting the product id from the URL
    const productId = router.currentRoute.value.params.id;
    // console.log(productId);
    // Finding the product with the given id
    let product = products.find((product) => product.id == productId);

    const Edit = () => {
      store.dispatch("editProduct", product);
      router.push("/products");
    };

    return {
      product,
      Edit,
    };
  },
};
</script>

<style scoped></style>
