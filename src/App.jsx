import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFount";
import Products from "./components/product/Products";
import Product from "./components/product/Product";
import NewProduct from "./components/product/NewProduct";
import EditProduct from "./components/product/EditProduct";
// import Users from "./components/user/users";

export default function App() {
  // endpoint from mock up API.
  const endpoint = "https://67f9f0e3094de2fe6ea2b617.mockapi.io/products";

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // get products from mock data
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
              // console.log(data);
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    if (loading) {
      return <div className="italic text-center">Loading data...</div>;
    }

    if (error) {
      return (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-red-600">Something went wrong!</h2>
          <p className="text-red-600">Please contact support@support.com</p>
        </div>
      );
    }

    // delete a product
    const onDelete = async (id) => {
      if (confirm("Are you sure delete this record?")) {
        try {
            setLoading(true);
            await fetch(`${endpoint}/${id}`, {
              method: 'DELETE',
            });
            const response = await fetch(endpoint);
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            // console.log(data);
            setProducts(data.filter(product => product.product_id !== id));
          } catch (err) {
            console.error('Delete error:', err);
          }finally {
            setLoading(false);
          }
      }
    }

    // router of app
    const router = createBrowserRouter([
      {
        path: "/", element: <Layout />,

        children: [
          {path: "home", element: <Home />},
          {path: "*", element: <NotFound />},
          // route of products
          {path: "products",
            element: <Products
            products={products}
            onDelete={onDelete}
          />},
          {path: "products/:productId", element: <Product products={products} />},
          {path: "newproduct", element: <NewProduct />},
          {path: "edit/:productId", element: <EditProduct products={products} />},

          // route of users
          // {path: "users", element: <Users />},
        ]
      }
    ]);

  return <RouterProvider router={router} />;
}