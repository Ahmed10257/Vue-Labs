<template>
  <div>
    <navBar />
    <div class="d-flex flex-column align-items-center">
      <h1 class="mb-4">All Posts</h1>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr class="fs-4 fw-normal" v-for="post in posts" :key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
              <td>
                <button class="btn btn-primary ms-3" @click="ViewPost(post.id)">
                  View
                </button>
                <button
                  class="btn btn-secondary ms-3"
                  @click="editPost(post.id)"
                >
                  Edit
                </button>
                <button
                  class="btn btn-danger ms-3"
                  @click="DeletePost(post.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import getPosts from "../Mixins/PostsService.js";
import getPost from "../Mixins/PostsService.js";
import deletePost from "../Mixins/PostsService.js";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "posts",
  mixins: [getPosts, getPost, deletePost],
  data() {
    return {
      posts: [],
      post: {},
    };
  },
  methods: {
    ViewPost(id) {
      this.$router.push(`/posts/${id}`);
    },
    DeletePost(id) {
      this.deletePost(id);
    },
    editPost(id) {
      this.$router.push(`/posts/${id}/edit`);
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style scoped></style>
