import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projets from './pages/Projets';

export default function App() {
  return (
    <>
      {/* <h1>Hello World</h1> */}
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/Profile" element={<Profile />}>

          </Route>
          <Route path="/contact" element={<Contact />}>

          </Route>
          <Route path="/projets" element={<Projets />}>
          </Route>
          <Route path="/" element={<Home />}>

          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}