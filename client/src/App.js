import store from "./store";
import "./App.css";
import { Provider } from "react-redux";
import TodoTemplete from "./components/TodoTemplete";

function App() {
  return (
    <Provider store={store}>
      <TodoTemplete></TodoTemplete>
    </Provider>
  );
}

export default App;
