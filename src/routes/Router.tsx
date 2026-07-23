import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../components/layout/Dashboard";
import Tournament from "../pages/Tournament/Tournament";
const  router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            index: true,
            element: <Dashboard/>
        },
        {
            path: "tournament",
            element: <Tournament />
        }
    ]
  },
]);

export default router;
