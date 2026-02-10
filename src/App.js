import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { About, Experience, Projects, Contact, Home, Leadership } from './Pages';
import Footer from './Pages/Footer';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className='App'>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Experience />
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
