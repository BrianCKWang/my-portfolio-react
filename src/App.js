import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  const [pages] = useState([
    { name: 'About', JSX: (<About />) },
    { name: 'Projects', JSX: (<Projects />) },
    { name: 'Resume', JSX: (<Resume />) },
    { name: 'Contact', JSX: (<Contact />) },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);
  useEffect(() => {
    document.title = "Brian's " + currentPage.name;
  }, [currentPage]);
  return (
    <div className="App">
      <Header
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <main>
        {currentPage.JSX}
      </main>
      <Footer />
    </div>
  );
}

export default App;
