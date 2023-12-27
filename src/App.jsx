import Mission from "./Mission"
import Home from "./Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Mission' element={<Mission/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
