import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { About,Experience,Projects,Contact,Home } from './Pages';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      {/* <Routes >
        <Route path = "/" element={<Home />}/>
        <Route path = "/about" element={<About />}/>
        <Route path = "/experience" element={<Experience />}/>
        <Route path = "/projects" element={<Projects />}/>
        <Route path = "/contact" element={<Contact />}/>
      </Routes> */}
    </div>
  );
}

export default App;
