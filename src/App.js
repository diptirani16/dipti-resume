import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
// import Education from './components/Education';
// import Certification from './components/Certification';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
      {/* <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> */}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <Route exact path="/education">
          <Education />
        </Route> */}
        <Route exact path="/skills">
          <Skills />
        </Route>
        {/* <Route exact path="/certification">
          <Certification />
        </Route> */}
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
      {/* </Container> */}
    </div>
  );
}

export default App;
