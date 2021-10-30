import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Education from './components/Education';
import Certification from './components/Certification';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Education />
      <Skills />
      <Certification />
    </div>
  );
}

export default App;
