import Navbar from './components/Navbar/Navbar';
import Signature from './components/Signature/Signature';
import './App.css';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Signature/>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
 
    </div>
  );
}

export default App;
