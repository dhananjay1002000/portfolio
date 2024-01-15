import Header from './components/header';
import HomePage from './components/homePage';
import Footer from './components/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/nav-components/about';
import Projects from './components/nav-components/projects';
import Resume from './components/nav-components/resume';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/About' element={<About />}></Route>
          <Route exact path='/Projects' element={<Projects />}></Route>
          <Route exact path='/Resume' element={<Resume />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
