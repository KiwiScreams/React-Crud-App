import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Update from "./pages/update/Update";
import Read from "./pages/read/Read";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Crud App | Home";
        break;
      case "/create":
        document.title = "Crud App | Create";
        break;
      case "/update/":
        document.title = "Crud App | Update";
        break;
      case "/read":
        document.title = "Crud App | Detail";
        break;
      default:
        document.title = "Crud App";
    }
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
    </>
  );
}

export default App;
