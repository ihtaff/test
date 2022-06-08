import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/pages/ErrorPage';
import Video from './components/pages/Video';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/video" element={<Video/>} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>


  );
}

export default App;
