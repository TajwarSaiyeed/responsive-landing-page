import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/home/layout";
import HomePage from "../pages/home/home-page";
import UserPage from "../pages/user/UserPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:name",
        element: <UserPage />,
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_SEVER_ADDRESS}/api/users/${params.name}`
          ),
      },
    ],
  },
]);
