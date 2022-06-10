import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
         <AboutMe></AboutMe>
         <Contact></Contact>
         <Projects></Projects>
        </div>
    );
};

export default Home;