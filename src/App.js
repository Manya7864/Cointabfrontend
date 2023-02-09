import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Userdetails from './Pages/Userdetails';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/userdetails" element={<Userdetails/>}></Route>
      </Routes> 
    </div>
  );
}

export default App;