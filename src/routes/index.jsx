// routes/index.jsx
import Home from "../pages/Home/index";
import LoginPage from "../pages/admin/account/LoginPage";
import AdminDashboard from "../pages/admin/AdminDashboard/index.jsx";
import CreateVideo from "../pages/user/CreateVideo/index.jsx";
import CreateScript from "../pages/user/CreateScript/index.jsx";
import Gallery from "../pages/user/Gallery/index.jsx";
import History from "../pages/user/History/index.jsx";
import Settings from "../pages/user/Settings/index.jsx";
import DefaultLayout from "../components/Layout/DefaultLayout";
import AdminLayout from "../components/adminLayout/AdminLayout";
import UserLayout from "../components/userLayout/UserLayout";

// Routes công khai
const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path:  "/login",
    component: LoginPage,
    layout: null,
  },
];

// Routes yêu cầu đăng nhập và quyền admin
const privateRoutes = [
  {
    path: "/admin",
    component: AdminDashboard,
    layout: AdminLayout,
  },
];

// Routes cho người dùng thường
const userRoutes = [
  {
    path: "/user/create-video",
    component: CreateVideo,
    layout: UserLayout,
  },
  {
    path: "/user/create-script",
    component: CreateScript,
    layout: UserLayout,
  },
  {
    path: "/user/gallery",
    component: Gallery,
    layout: UserLayout,
  },
  {
    path: "/user/history",
    component: History,
    layout: UserLayout,
  },
  {
    path: "/user/settings",
    component: Settings,
    layout: UserLayout,
  },
];

export { publicRoutes, privateRoutes, userRoutes };