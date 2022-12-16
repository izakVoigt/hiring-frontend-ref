import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomThemeProvider } from "@hooks";
import { Compare, Home } from "@pages";
import { GlobalStyles } from "@styles";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/comparacao",
    element: <Compare />,
  },
]);

const App = () => {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <ToastContainer />
      <RouterProvider router={routes} />
    </CustomThemeProvider>
  );
};

export default App;
