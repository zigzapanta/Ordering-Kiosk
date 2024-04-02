
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
// import Main from "./Components/Main/Main"
import Data from './Components/Data'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Ordering-Kiosk" element={<Home />}/>
{/*          <Route path="/burger" element={<Main  category="burger"/>}/>
          <Route path="/fries" element={<Main  category="fries"/>}/>
          <Route path="/spaghetti" element={<Main  category="spaghetti"/>}/>
          <Route path="/dessert" element={<Main  category="dessert"/>}/>*/}
          <Route path="/data" element={<Data />}/>


        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
