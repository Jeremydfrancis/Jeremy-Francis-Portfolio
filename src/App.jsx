import Navbar from './Components/Navbar'
import './App.css'
import './index.css'
import  Home  from './Components/Home'
import  About  from './Components/About'
import  Services  from './Components/services'
import  Contact  from  './components/Contact'
import {  Route, Routes, BrowserRouter}  from "react-router-dom"


function App() {
  

  return (
<>
<Navbar />

  <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/services' element={ <Services />} />
          <Route path='/contact' element={ <Contact />} />
        </Routes>
  </main>
  
  </>

  );
}

export default App;
