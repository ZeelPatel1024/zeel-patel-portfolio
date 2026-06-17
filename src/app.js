import './app.css';
import Navbar from './components/navbar';
import { Routes, Route } from 'react-router-dom';
import { About, Experience, Projects, Home, Leadership } from './pages';
import Footer from './pages/footer';
import ScrollToTop from './components/scrolltotop';

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
            <Projects />
          </>
        } />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
