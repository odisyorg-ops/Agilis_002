// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import ContactPage from './Pages/ContactPage.jsx';

// Define your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App acts as the Layout
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "services",
        element: <h2>Our Services</h2>,
      },
      {
        path: "blogs",
        element: <h2>Latest Blog Posts</h2>,
      },
      {
        path: "contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);