import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/regester";
import Home from  "./pages/home";


function App() {

  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Register />} />
       <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
