import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import About from './components/About'
import Home from './components/Home'




const router = createBrowserRouter9([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        loader: productsAndCartData,
        children: [
          { path: '/', element: <Home /> },
          { path: '/shop', element: <Shop /> },
          { path: '/cart', element: <Cart /> },
          { path: '/about', element: <About /> },
        ],
      },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
  