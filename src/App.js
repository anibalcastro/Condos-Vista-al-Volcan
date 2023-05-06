import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Frontpage from './Components/Frontpage/Frontpage';
import About from './Components/About/About';
import Amenities from './Components/Amenities/Amenities';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    document.title = 'Condos Vista al Volcán';
  })

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Frontpage/>
      <About />
      <Amenities />
    </div>
  );
}

export default App;
