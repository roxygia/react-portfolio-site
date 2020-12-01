import './App.css';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import Contact from './components/pages/Contact'



function App() {
  return (
    <div>
      <Router>
      <ScrollToTop />
        <Navbar/>
        <Switch>
          <Route path='/projects' exact component={Projects} />
          <Route path='/about-me' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
