import Home from "./Main/Home";
import Cart from "./Cart/Cart";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./Error/Error";
import Menu from "./Main/Menu";
import { Provider } from "react-redux";
import appStore from "../utils/redux/reduxStore";

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
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default Body;
