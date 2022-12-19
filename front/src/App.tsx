import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CustomThemeProvider, StockCompareContextProvider, StockPriceContextProvider } from "@contexts";
import { Compare, Home } from "@pages";
import { GlobalStyles } from "@styles";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <StockPriceContextProvider>
        <Home />
      </StockPriceContextProvider>
    ),
  },
  {
    path: "/comparacao",
    element: (
      <StockCompareContextProvider>
        <Compare />
      </StockCompareContextProvider>
    ),
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
