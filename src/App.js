import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education'
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Skill/>
      <Project/>
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
