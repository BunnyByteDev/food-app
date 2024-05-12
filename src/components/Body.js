import Home from "./Main/Home";
import Cart from "./Cart/Cart";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Error/Error";
import Menu from "./Main/Menu";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <Error /> },

    {
      path: "/cart",
      element: <Cart />,
      errorElement: <Error />,
    },
    {
      path: "restaurant/:resId",
      element: <Menu />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
