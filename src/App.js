import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './scrollToTop';
AOS.init({
  duration:1000
});

function App() {
  return (
    <div className="App">
    
     
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
     <Route exact path='/' element={<Home/>}/>
     <Route path='projects' element={<Projects/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
