import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import UploadForm from './pages/UploadForm';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/explorepage" element={<ExplorePage/>} />
        <Route path="/upload" element={<UploadForm/>} />
      </Routes>
    </Router>
  )
}

export default App
