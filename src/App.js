import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='mainAppWrapper'>
      <Navbar />
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;
