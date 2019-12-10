import React, { useState } from 'react';
import './App.css';
import PastLList from './components/past-l-list';
import { getPastLaunches, getUpcomingLaunches } from './utility/space-x-service';
import UpcomingLList from './components/upcoming-l-list';
import Content from './layout/content';
import Header from './components/header'
import Footer from './components/footer';



function App() {






  return (
    <div className="App">
      <Header />
      <Content />
      {/* <Footer /> */}

    </div>
  );
}

export default App;
