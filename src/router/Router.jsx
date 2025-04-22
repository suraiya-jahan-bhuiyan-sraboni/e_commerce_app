import { createBrowserRouter} from "react-router";
import MainLayout from "../LayoutComponents/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    errorElement: <h2>Route not found</h2>,
    children:[
      {
        path:"/",
        element: <Home/>,
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/signup",
        element: <Signup/>
      },
      {
        path:"/login",
        element:<Login/>,
      }

    ]
  },
]);

export default router
