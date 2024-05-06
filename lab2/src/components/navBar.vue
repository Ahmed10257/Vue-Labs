<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link fs-4" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-4" to="/products"
                >Products</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-4" to="/products/add"
                >Add Product</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link fs-4" to="/cart">Cart</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "navBar",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
