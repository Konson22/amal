import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ChildrenContextProvider from './contexts/ChildrenContextProvider';
import App from './App';
import './app.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChildrenContextProvider>
        <Routes>
          <Route path='/*' element={<App tab="home" />} />
        </Routes>
      </ChildrenContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

