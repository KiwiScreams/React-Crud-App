import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Update from "./pages/update/Update";
import Read from "./pages/read/Read";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NotFound from "./pages/not found/NotFound";
function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Crud App | Home";
    } else if (location.pathname === "/create") {
      document.title = "Crud App | Create";
    } else if (location.pathname.includes("/update")) {
      document.title = "Crud App | Update";
    } else if (location.pathname.includes("/read")) {
      document.title = "Crud App | Detail";
    } else {
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
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
