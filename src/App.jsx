import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </>
  );
}

export default App;
