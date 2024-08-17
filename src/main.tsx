import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu.tsx";
import { Cart } from "./pages/Cart/Cart.tsx";
import { Error } from "./pages/Error/Error.tsx";
import { Layout } from "./layout/Menu/Layout.tsx";
import { Product } from "./pages/Product/Product.tsx";
import axios from "axios";
import { PRFIX } from "./helpers/API.ts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Menu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "product/:id",
                element: <Product />,
                loader: async ({ params }) => {
                    const { data } = await axios.get(`${PRFIX}/products/${params.id}`);
                    return data;
                }
            }
        ]
    },
    {
        path: "/*",
        element: <Error />
    }
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
