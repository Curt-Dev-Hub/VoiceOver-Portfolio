import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const ContactPage = lazy(() => import('./pages/contact/ContactPage'));
const DemoPage = lazy(() => import('./pages/demos/DemoPage'));
const AboutPage = lazy(() => import('./pages/about/AboutPage'));

function App() {
  return (
    <div className='mainAppWrapper'>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/contact-page' element={
          <Suspense fallback={<div>Loading...</div>}>
            <ContactPage />
          </Suspense>
        } />
        <Route path='/voice-demo' element={
          <Suspense fallback={<div>Loading...</div>}>
            <DemoPage />
          </Suspense>
        }/>
        <Route path='/about-page' element={
          <Suspense fallback={<div>Loading...</div>}>
            <AboutPage />
          </Suspense>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;