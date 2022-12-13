import { CustomThemeProvider } from "./hooks";
import { GlobalStyles } from "./styles";

const App = () => {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <div></div>
    </CustomThemeProvider>
  );
};

export default App;
