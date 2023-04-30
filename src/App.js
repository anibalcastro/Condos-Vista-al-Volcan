import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Frontpage from './Components/Frontpage/Frontpage';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Frontpage/>
    </div>
  );
}

export default App;
