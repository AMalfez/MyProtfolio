import './App.scss';
import Home from './Components/Home';
import Navigationbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './Components/Contact'
import Skills from './Components/Skills';
function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills containerTopMargin='70px' mainHeight='100%'/>}/>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
