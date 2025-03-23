import {BrowserRouter, Routes, Route} from "react-router-dom";
import CatatanList from "./components/CatatanList";
import AddCatatan from "./components/AddCatatan";
import EditCatatan from "./components/EditCatatan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CatatanList/>}/>
        <Route path="add" element={<AddCatatan/>}/>
        <Route path="edit/:id" element={<EditCatatan/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;