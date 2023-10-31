import React from 'react';
import ReactDOM from 'react-dom';
import './site.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BlogListing from './components/BlogListing';
import BlogItem from './components/BlogItem';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<BlogListing />} />
          <Route path="/blog" element={<BlogItem />}>
            <Route path=":blogId" element={<BlogItem />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
