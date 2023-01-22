import './App.css';
import Home from './components/Home';
import Reserve from './components/Reserve';
import { Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import Confirm from './components/Confirm';
function App() {
  return (
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/booking' element={<Reserve />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/confirm' element={<Confirm />} />
     </Routes>
  );
}

export default App;
