import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage";
import About from "../Pages/About";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index:true,
            Component: Home,
        },{
          path: "/coverage",
          Component: Coverage,
            loader: () => fetch('/servicePoint.json').then(res=>res.json())
        },
        {
          path:"/about",
          Component:About,
        }
    ]
  },
]);