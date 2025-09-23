
import './App.css';

import Home from './Pages/Home.js';
import Videos from './Pages/Videos.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes> 
      <Route index element={<Home/>}/>
      <Route path='/Video' element={<Videos/>}/>
    </Routes>
    </BrowserRouter>
    
   
    
    
   </>
  );
}

export default App;
