import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import OrderFood from "../OrderFood/OrderFood";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import MyCart from "../Dashboard/MyCart";
import UserHome from "../Dashboard/UserHome";
import AdminHome from "../Dashboard/Admin/AdminHome";
import AddItems from "../Dashboard/Admin/AddItems";
import ManageItems from "../Dashboard/Admin/ManageItems";
import ManageBookings from "../Dashboard/Admin/ManageBookings";
import AllUsers from "../Dashboard/Admin/AllUsers";
import PrivateAdminRoute from "../PrivateAdminRoute/PrivateAdminRoute"
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
import Payment from "../Dashboard/Payment";







export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/menu",
        element: <Menu></Menu>
      },
      {
        path: "/orderFood/:title",
        element: <OrderFood></OrderFood>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: '/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'dashboard/myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'dashboard/userHome',
        element: <UserHome></UserHome>
      },
      {
        path: '/dashboard/payment',
        element:<Payment></Payment>
      },
      {
        path: 'dashboard/adminHome',
        element: <PrivateAdminRoute><AdminHome></AdminHome></PrivateAdminRoute>
      },
      {
        path: 'dashboard/addItems',
        element: <PrivateAdminRoute><AddItems></AddItems></PrivateAdminRoute>
      },
      {
        path: 'dashboard/manageItems',
        element: <PrivateAdminRoute><ManageItems></ManageItems></PrivateAdminRoute>
      },
      {
        path: 'dashboard/bookingItems',
        element: <PrivateAdminRoute><ManageBookings></ManageBookings></PrivateAdminRoute>
      },
      {
        path: 'dashboard/allUsers',
        element: <PrivateAdminRoute><AllUsers></AllUsers></PrivateAdminRoute>
      },

    ]

  }
]);