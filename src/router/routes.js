import Home from "../views/private/Home.vue";
import Managers from "../views/private/Managers";
import NovoUsuario from "../views/public/NovoUsuario";
import Login from "../views/public/Login";

export default [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/cadastre-se",
    name: "novo-usuario",
    component: NovoUsuario,
  },

  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/managers",
    name: "managers",
    component: Managers,
  },
];
