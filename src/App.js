import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Frontpage from './Components/Frontpage/Frontpage';
import About from './Components/About/About';
import Amenities from './Components/Amenities/Amenities';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';

import { useEffect } from 'react';


function App() {
  useEffect(() => {
    document.title = 'Condos Vista al Volcán';
  })

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Frontpage />
        <About  />
        <Amenities  />
        <Gallery  />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
