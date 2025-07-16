import React, {
  useState,
  useEffect,
} from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFount";
import Login from "./pages/Login";
import Signup from "./pages/Singup";
import ForgotPassword from "./pages/ForgotPassword";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  // endpoint from mock up API.
  // const endpoint = "https://67f9f0e3094de2fe6ea2b617.mockapi.io/products";
  // router of app
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     children: [
  //       { path: "/login", element: <Login /> },
  //       { path: "*", element: <NotFound /> },
  //     ],
  //   },
  // ]);
  // return <RouterProvider router={router} />;
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="*"
            element={<NotFound />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/forgotpassword"
            element={<ForgotPassword />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
