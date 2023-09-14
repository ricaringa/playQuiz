import { Provider } from "react-redux";
import store from "./app/index";
import Home from "./views/Home";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/theming";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Results from "./views/Results";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}> 
      <ChakraProvider theme={theme}>
        <Navbar />
      <BrowserRouter>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/results" Component={Results} />
            </Routes>
            </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
