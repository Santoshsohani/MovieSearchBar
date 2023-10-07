import './App.css';
import SignUp from './Authentication/SignUp/SignUp';
import Login from './Authentication/Login/Login';
import ForgotPassword from './Authentication/ForgotPassword/ForgotPassword';
import Home from './Home/Home';
import Fav from './Components/Favourite/Fav';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/home' element={<Home />} />
          <Route path='/fav' element={<Fav />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
