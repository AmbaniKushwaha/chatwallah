import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainOutlet from "./components/MainOutlet";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ChatScreen from "./components/ChatScreen";
import UserOutlet from "./components/UserOutlet";
import UserDashboard from "./Pages/UserDashboard";
import UserSidebar from "./components/UserSidebar";
import UserProfile from "./Pages/UserProfile";
import ChangePassword from "./Pages/ChangePassword";
import ForgetPassword from "./Pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainOutlet />,
    errorElement: <>Error Page</>,
    children: [
      { index: true, element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/forgetpassword", element: <ForgetPassword /> }
    ]
  },
   {
        path: "/user",
        element: <UserOutlet/>,
        children: [
            { index: true, element: <></>},
            { path: "chat", element: <ChatScreen/> },
            { path: "profile", element: <UserProfile/> },
            {path: "changepassword", element:<ChangePassword/>},
        ]
    }

  
])

export default router