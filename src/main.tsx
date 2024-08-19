import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu.tsx";
import { Cart } from "./pages/Cart/Cart.tsx";
import { Error } from "./pages/Error/Error.tsx";
import { Layout } from "./layout/Menu/Layout.tsx";
import { Product } from "./pages/Product/Product.tsx";
import axios from "axios";
import { PREFIX } from "./helpers/API.ts";

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
                errorElement: <>Ошибка</>,
                loader: async ({ params }) => {
                    return defer({
                        data: new Promise((resolve, reject) => {
                            axios.get(`${PREFIX}/products/${params.id}`).then(data => resolve(data)).catch(e => reject(e));
                        })
                    });
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
