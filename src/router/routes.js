import Home from "../views/private/Home.vue";
import Managers from "../views/private/Managers";
import NovoUsuario from "../views/public/NovoUsuario";
import Login from "../views/public/Login";

export default [
  {
    path: "/",
    name: "login",
    component: Login,
    meta: {
      public: true,
    },
  },
  {
    path: "/cadastre-se",
    name: "novo-usuario",
    component: NovoUsuario,
    meta: {
      public: true,
    },
  },

  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/managers",
    name: "managers",
    component: Managers,
  },
];
