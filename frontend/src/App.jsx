import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Signin from './pages/Signin'
import Signup from './pages/SignUp'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
