import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import home from "./components/home.vue";
import { createRouter, createWebHistory } from "vue-router";
import posts from "./components/posts.vue";
import post from "./components/post.vue";
import editPost from "./components/editPost.vue";
import addPost from "./components/addPost.vue";

const routes = [
  { path: "/", component: home },
  { path: "/posts", component: posts },
  { path: "/posts/new", component: addPost },
  { path: "/posts/:id", component: post },
  { path: "/posts/:id/edit", component: editPost },
  { path: "/:notFound(.*)*", component: home, meta: { notFound: true } },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
