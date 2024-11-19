import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/regester";
// import Home from  "./pages/home";
// import Map from "./pages/Map"
// import Data from "./pages/data";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Register />} />
       {/* <Route path="/Home" element={<Home/>}/> */}
        {/* <Route path="/Map" element={<Map/>}/>
        <Route path="/data" element={<Data/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
