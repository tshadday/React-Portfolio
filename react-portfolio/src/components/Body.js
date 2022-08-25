import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NavTabs from './NavTabs';
import '../App.css';

function Body() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    
    const renderPage = () => {
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        if (currentPage === 'Projects') {
          return <Projects />;
        }
        return <AboutMe />;
      };
    
      const handlePageChange = (page) => setCurrentPage(page);
    
      return (
        <div>
          {/* Passing the currentPage from state and the function to update it */}
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Here we are calling the renderPage method which will return a component  */}
          {renderPage()}
        </div>
      );
}

export default Body;

