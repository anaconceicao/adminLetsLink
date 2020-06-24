
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import ListaDeUsuarios from "views/ListaDeUsuarios/ListaDeUsuarios";



const dashboardRoutes = [
  {
    path: "/lista_de_usuarios",
    name: "Lista de Usuários",
    icon: Person,
    component: ListaDeUsuarios,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Gráfico de novos Usuários",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Adicionar Administrador",
    icon: LibraryBooks,
    component: UserProfile,
    layout: "/admin"
  },
  
  
];

export default dashboardRoutes;
