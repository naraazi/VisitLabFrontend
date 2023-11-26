import Index from "views/Index.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import RegisterLab from "views/examples/RegisterLab";
import ListLab from "views/examples/ListLab";
import EditLab from "views/examples/EditLab";
import ListPreRegistration from "views/examples/ListPreRegistration";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  {
    path: "/register",
    name: "Cadastrar",
    icon: "ni ni-single-02 text-yellow",
    component: <Register />,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Tables />,
  //   layout: "/admin",
  // },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
    hide: true
  },
  {
    path: "/lab",
    name: "Laboratórios",
    icon: "ni ni-key-25 text-info",
    component: <ListLab />,
    layout: "/admin",
  },
  {
    path: "/pre-registration",
    name: "Pré Registros",
    icon: "ni ni-key-25 text-info",
    component: <ListPreRegistration />,
    layout: "/admin",
  },
  {
    path: "/logout",
    name: "Sair",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/register-lab",
    name: "Registrar Laboratório",
    icon: "ni ni-key-25 text-info",
    component: <RegisterLab />,
    layout: "/admin",
    hide: true
  },
  {
    path: "/edit-lab/:id",
    name: "Editar Laboratório",
    icon: "ni ni-key-25 text-info",
    component: <EditLab />,
    layout: "/admin",
    hide: true
  },
];
export default routes;
