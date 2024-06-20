import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import UploadForm from './pages/UploadForm';
import FullDishInfo from './pages/FullDishInfo';
import CuisinePage from './pages/CuisinePage';
import AllCatogeries from './pages/AllCatogeries';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/explorepage" element={<ExplorePage/>} />
        <Route path="/upload" element={<UploadForm/>} />
        <Route path="/allcatogeries" element={<AllCatogeries/>} />
        <Route path="/dish/:id" element={<FullDishInfo/>} />
        <Route path="/cuisine/:cuisineName" element={<CuisinePage/>} />
      </Routes>
    </Router>
  )
}

export default App
