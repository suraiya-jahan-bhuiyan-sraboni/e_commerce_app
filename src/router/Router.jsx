import { createBrowserRouter} from "react-router";
import App from "../App";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h2>Route not found</h2>
  },
]);

export default router
