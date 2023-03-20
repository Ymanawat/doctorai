import React, {useState} from 'react';
import './App.css';
// import results from './components/results';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Diagnose from './components/DiagnoseHome';
import DiagnoseBody from './components/DiagnoseBody';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigationClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="App">
      <Navigation currentPage={currentPage} onClick={handleNavigationClick} />
      <div className="page-container">
        {currentPage === "home" ? <Home /> : null}
        {currentPage === "diagnose" ? <DiagnoseBody /> : null}
        {currentPage === "report" ? <Diagnose /> : null}
      </div>
    </div>
  );
}

export default App;
