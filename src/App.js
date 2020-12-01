import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        <Switch>
          <Route path='/projects' exact component={Projects} />
        </Switch>
        <Switch>
          <Route path='/about-me' exact component={About} />
        </Switch>
        <Switch>
          <Route path='/contact' exact component={Contact} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
