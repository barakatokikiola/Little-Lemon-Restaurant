import './App.css';
import { useReducer } from 'react';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp';
import Confirm from './components/Confirm';
import BookingForm from './components/BookingForm';

const initialTime =[
  '17:00','18:00','19:00','20:00','21:00','22:00'
]

// const date=new Date();
function App() {
  const updateTimes = () => {
    dispatch()
};
  const [availableTimes, dispatch] = useReducer(updateTimes, initialTime);
  // const initializeTimes=()=>{
    
  // }
  return (
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/booking' element={<BookingForm handleTime={updateTimes} availableTimes={availableTimes} />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/confirm' element={<Confirm />} />
     </Routes>
  );
}

export default App;
