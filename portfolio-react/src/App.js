import Navbar from './components/Navbar/Navbar';
import Signature from './components/Signature/Signature';
import './App.css';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <Signature/>
      <AboutMe />
      <Skills />
      <Contact />
 
    </div>
  );
}

export default App;
