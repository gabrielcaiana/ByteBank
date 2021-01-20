export default [
  {
    path: "/",
    name: "login",
    component: () => import("../views/public/Login"),
    meta: {
      public: true,
    },
  },
  {
    path: "/cadastre-se",
    name: "novo-usuario",
    component: () => import("../views/public/NovoUsuario"),
    meta: {
      public: true,
    },
  },

  {
    path: "/home",
    name: "home",
    component: () => import("../views/private/Home.vue"),
  },
  {
    path: "/managers",
    name: "managers",
    component: () => import("../views/private/Managers"),
  },
];
