import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import { BrowserRouter as Router } from 'react-router-dom';
import Solutions from './components/Solutions/Solutions';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Services />
        <Solutions />
      </Router>
    </div>
  );
}

export default App;
