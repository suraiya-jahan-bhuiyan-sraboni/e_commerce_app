import { createBrowserRouter} from "react-router";
import MainLayout from "../pages/MainLayout";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <h2>Route not found</h2>
  },
]);

export default router
