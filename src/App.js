import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Frontpage from './Components/Frontpage/Frontpage';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Frontpage/>
      <About />
    </div>
  );
}

export default App;
