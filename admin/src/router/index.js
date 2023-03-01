import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/HomeView.vue";

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Login",
    },

    path: "/",

    name: "login",
    component: import("@/views/LoginView.vue"),
  },
  {
    meta: {
      title: "Profile"
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    meta: {
      title: "Dashboard"
    },
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/HomeView.vue"),
  },
  {
  meta: {
  title: "Properties"
},
  path: "/properties",
  name: "properties",
  component: () => import("@/views/PropertiesView.vue"),
},
  {


    meta: {
      title: "AddProperty",
    },
    path: "/add-property",
    name: "addproperty",
    component: () => import("@/views/NewPropertyView.vue"),
  },

  {
    meta: {
      title: "Admin"
    },
    path: "/admins",
    name: "admins",
    component: () => import("@/views/AdminView.vue"),
  },
  {
    meta: {
      title: "Clients"
    },
    path: "/clients",
    name: "clients",
    component: () => import("@/views/ClientsView.vue"),
  },
  {
    meta: {
      title: "AddAdmin"
    },
    path: "/add-admin",
    name: "addadmin",
    component: () => import("@/views/NewAdminView.vue"),
  },
  {
    meta: {
      title: "AddClient"
    },
    path: "/add-client",
    name: "addclient",
    component: () => import("@/views/NewClientView.vue"),
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
