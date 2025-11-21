import { createBrowserRouter } from "react-router";
import Root from "../Layout/RootLayout/Root";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'coverage',
                Component: Coverage,
                loader: () => fetch('/warehouses.json').then(res => res.json())
            }
        ]
    }
])
