import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Error from "../components/Error";
import Details from "../components/Details";
import PrivetRoute from "../routes/PrivetRoute";
import Profile from "../pages/Profile";
import ProfileUpdate from "../pages/ProfileUpdate";
import ResetPassword from "../components/ResetPassword";
import AllCard from "../components/AllCard";
import User from "../pages/User";
import AdminRoute from "./AdminRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <Details />
          </PrivetRoute>
        ),
        loader: () => fetch("../data.json"),
      },
      {
        path: "/all-data",
        element: <AllCard />,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivetRoute>
            <ProfileUpdate />
          </PrivetRoute>
        ),
      },
      {
        path: "/reset",
        element: <ResetPassword />,
      },
      {
        path: "/users",
        element: (
          <AdminRoute>
            <User />
          </AdminRoute>
        ),
        loader: () => fetch("https://server-gamma-flame.vercel.app/users"),
      },
    ],
  },
]);

export default Router;
