import Index from "views/Index.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import RegisterLab from "views/examples/RegisterLab";
import ListLab from "views/examples/ListLab";
import EditLab from "views/examples/EditLab";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  
  {
    path: "/register",
    name: "Cadastrar",
    icon: "ni ni-single-02 text-yellow",
    component: <Register />,
    layout: "/admin",
  },
  
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/lab",
    name: "Laboratórios",
    icon: "ni ni-key-25 text-info",
    component: <ListLab />,
    layout: "/admin",
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
