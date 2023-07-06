import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Container/Home';
import About from './Container/About';
import Contact from './Container/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
