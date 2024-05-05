<template>
  <div>
    <div class="d-flex flex-column align-items-center">
      <h1 class="mb-4">Post</h1>
      <p>{{ post.id }}</p>
      <p>{{ post.title }}</p>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import getPost from "../Mixins/PostsService.js";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "post",
  components: {},
  data() {
    return {
      id: "",
      post: {},
    };
  },
  mixins: [getPost],
  mounted() {},
  created() {
    this.id = this.$route.params.id;
    this.getPost(this.id);
  },
};
</script>

<style scoped></style>
