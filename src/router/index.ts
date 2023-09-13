import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "AppLayout" },
    component: Home,
  },

  {
    path: "/catalog",

    meta: { layout: "AppLayout" },
    name: "Catalog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Catalog.vue"),
  },
  {
    path: "/about",

    meta: { layout: "AppLayout" },
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",

    meta: { layout: "AppLayout" },
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (Contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
  },
  {
    path: "/wishlist",

    meta: { layout: "AppLayout" },
    name: "Wishlist",
    // route level code-splitting
    // this generates a separate chunk (Contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Wishlist.vue"),
  },
  {
    path: "/cart",

    meta: { layout: "AppLayout" },
    name: "Cart",
    // route level code-splitting
    // this generates a separate chunk (Cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Cart" */ "../views/Cart.vue"),
  },
  {
    path: "/product-detail",

    meta: { layout: "AppLayout" },
    name: "ProductDetail",
    // route level code-splitting
    // this generates a separate chunk (Cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Cart" */ "../views/ProductDetail.vue"),
  },
  {
    path: "/profile",

    meta: { layout: "AppLayout" },
    name: "Profile",
    // route level code-splitting
    // this generates a separate chunk (Cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Cart" */ "../views/Profile.vue"),
  },
  {
    path: "/login",

    meta: { layout: "AppLayout" },
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (Contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Login.vue"),
  },
  {
    path: "/signup",

    meta: { layout: "AppLayout" },
    name: "Signup",
    // route level code-splitting
    // this generates a separate chunk (Contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Signup.vue"),
  },

  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
