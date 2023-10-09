import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./pages/Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/products/:categoryName",
        element: <Products />,
    },
    {
        path: "/products/:categoryName/:productName",
        element: <Product />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
