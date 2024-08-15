import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import { Menu } from "./pages/Menu/Menu";
import { Cart } from "./pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
]);

function App() {
    return (
        <>
            <Button>Применить</Button>
            <Button appearance="big">
                <img src="exit-icon.svg"></img>
                Выход
            </Button>
            <Button appearance="big">
                <img src="cart-icon.svg"></img>
                Выход
            </Button>
            <Input placeholder="Email" />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
