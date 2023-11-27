/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import RegisterLab from "views/examples/RegisterLab";
import ListLab from "views/examples/ListLab";
import EditLab from "views/examples/EditLab";
import ListPreRegistration from "views/examples/ListPreRegistration";
import RegisterVisit from "views/examples/RegisterVisit";
import ListVisit from "views/examples/ListVisit";
import EditVisit from "views/examples/EditVisit";

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
  {
    path: "/visits",
    name: "Visitas",
    icon: "ni ni-key-25 text-info",
    component: <ListVisit />,
    layout: "/admin"
  },
  {
    path: "/register-visit",
    name: "Registrar Visitas",
    icon: "ni ni-key-25 text-info",
    component: <RegisterVisit />,
    layout: "/admin",
    hide: true
  },
  {
    path: "/logout",
    name: "Sair",
    icon: "ni ni-key-25 text-info",
    component: <Login />,
    layout: "/auth",
  },
  {
    path: "/edit-visit/:id",
    name: "Editar Visita",
    icon: "ni ni-key-25 text-info",
    component: <EditVisit />,
    layout: "/admin",
    hide: true
  },
];
export default routes;
