import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './GlobalStyles';


import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Freed } from './pages/Freed';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'freed',
    element: <Freed/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

