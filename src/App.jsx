import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Update from "./pages/update/Update";
import Read from "./pages/read/Read";

function App() {
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
