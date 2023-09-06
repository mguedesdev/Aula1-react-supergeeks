import './App.css'
import Navbar_component from './components/navbar/navbar'
import About from './pages/about'
import Notes from './pages/notes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    console.log(currentPage);
  }, [currentPage])
  return (
    <>
      <Navbar_component setCurrentPage={setCurrentPage}/>
      {currentPage === 1 ? <About/> : null}
      {currentPage === 2 ? <Notes/> : null}
      {currentPage === 3 ? <About/> : null}
      {currentPage === 4 ? <About/> : null}
    </>
  )
}

export default App
