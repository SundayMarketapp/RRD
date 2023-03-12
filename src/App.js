
import './App.css';
import InterMarkSheet from './Components/InterMarkSheet';
import TenthMarkSheet from './Components/TenthMarkSheet';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Functions from './Components/Functions';

function App() {
  return (
    <div>
      <div><Functions></Functions></div>
    
    <div><BrowserRouter>
    <nav>
        <Link to="/Tm">Tenth Marks Sheet</Link>
        <Link to="/Im">Inter Marks Sheet</Link>
      </nav>
    <Routes>
      <Route path="/Im"element={<InterMarkSheet></InterMarkSheet>}></Route>
      <Route path="/Tm" element={<TenthMarkSheet></TenthMarkSheet>}></Route>
    </Routes>
    </BrowserRouter></div>
    </div>
    
    
   
  );
}

export default App;
 