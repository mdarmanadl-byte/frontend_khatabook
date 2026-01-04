import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Customer from './component/customer';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import SignUp from './component/signup';
function App() {
  
   const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
  }, []);
  return (
    <div className='bg-amber-200'>
     <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />

    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/customer" element={<Customer />} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    
    </div>
  )
}

export default App
