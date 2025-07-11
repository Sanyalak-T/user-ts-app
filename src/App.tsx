import React, {
  useState,
  useEffect,
} from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router";

import Home from "./pages/Home";
import NotFound from "./pages/NotFount";

export default function App() {
  // endpoint from mock up API.
  // const endpoint = "https://67f9f0e3094de2fe6ea2b617.mockapi.io/products";

  // router of app
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,

      children: [
        { path: "home", element: <Home /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
