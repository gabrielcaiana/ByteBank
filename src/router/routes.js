import Home from "../views/Home.vue";
import Managers from "../views/Managers.vue";
import NovoUsuario from "../views/NovoUsuario"
import Login from "../views/Login";

export default [
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
  {
    path: "/cadastre-se",
    name: "novo-usuario",
    component: NovoUsuario,
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
];
