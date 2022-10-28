import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navigation />
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />
          <hr className="mt-4" />

          <TodoList />

          <hr className="mt-4" />

          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
