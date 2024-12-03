import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/regester";
import Home from  "./pages/home";
import Profile from "./pages/profile.js";


function App() {

  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Register />} />
       <Route path="/home" element={<Home/>}/>
       <Route path="/profile"element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
