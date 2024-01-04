import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Book from "./Pages/Book";
import { Toaster } from "react-hot-toast";
import Profile from "./Pages/Profile";

function App() {
  const isAuth = () => {
    return localStorage.getItem("user_info") !== null;
  };
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth() ? <Home /> : <Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/book/:id" element={<Book />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
