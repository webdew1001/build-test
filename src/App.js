// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
 
 


import MainPage from './MainPage';
import SubPage from './SubPage';
import Header from './header';

function App() {
  return (
    <Router>
      {/* Header는 항상 보임 */}
      <Header />
      <Routes>
        <Route path="/Main" element={<MainPage />} />
        <Route path="/" element={<SubPage />} />
      </Routes>
    </Router>
  );
}

export default App;
