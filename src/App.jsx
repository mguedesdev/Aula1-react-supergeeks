import './App.css'
import Navbar_component from './components/navbar/navbar'
import About from './pages/about'
import Notes from './pages/notes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Navbar_component/>
        <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="/About" element={<About />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Blog" element={<Notes />} />
          <Route path="/News" element={<Notes />} />
        </Routes>
    </Router>
  );
}

export default App
