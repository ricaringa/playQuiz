import { Provider } from "react-redux"
import store from "./app/index"
import Home from "./views/Home"

function App() {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
