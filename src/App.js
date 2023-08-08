import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import ContactPage from './pages/contact/ContactPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='mainAppWrapper'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/contact-page' element={ <ContactPage /> } />
      </Routes>
    </div>
  );
}

export default App;
