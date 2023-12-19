import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Book from "./Pages/Book";

function App() {
  const isAuth = true;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuth == false ? <Login /> : <Home />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/book/:id" element={<Book />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
