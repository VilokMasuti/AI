
import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import SideBar from "./Components/Sidebar/SideBar";
import Start from "./Components/Start";


function App() {
  return (
    <div className="flex ">
      <SideBar />
     
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
