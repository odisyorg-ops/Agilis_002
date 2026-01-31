// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Solution from './Pages/Solution.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import Blogs from './Pages/Blogs.jsx';
import BlogPost from './Components/Blog/BlogPost.jsx';
import Process from './Pages/Process.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Solution />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path:"process",
        element:<Process></Process>
      },
      {
        /* 2. Add the dynamic route for single blog posts */
        path: "blogs/:id", 
        element: <BlogPost />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);