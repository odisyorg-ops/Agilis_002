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
import ConsultationPage from './Pages/ConsultationPage.jsx';
import Privacy from './Pages/Privacy.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx';
import CCPA from './Pages/CCPA.jsx';
import CarbonNeutral from './Pages/CarbonNeutral.jsx';
import CookiePolicy from './Pages/CookiePolicy.jsx';
import CSR from './Pages/CSR.jsx';
import GDPR from './Pages/GDPR.jsx';
import ModernSlavery from './Pages/ModernSlavery.jsx';

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
        /* 2. Add the dynamic route for single blog posts */
        path: "blogs/:id", 
        element: <BlogPost />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "consultation",
        element: <ConsultationPage></ConsultationPage>,
      },
      {
        path: "terms",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path:"terms/privacy-policy",
        element:<Privacy></Privacy>,
      },
      {
        path:"terms/ccpa",
        element:<CCPA></CCPA>,
      },
      {
        path:"terms/cookie",
        element:<CookiePolicy></CookiePolicy>,
      },
      {
        path:"terms/csr",
        element:<CSR></CSR>,
      },
      {
        path:"terms/modern-slavery",
        element:<ModernSlavery></ModernSlavery>,
      },
      {
        path:"terms/gdpr",
        element:<GDPR></GDPR>,
      },
      {
        path:"terms/carbon-neutral",
        element:<CarbonNeutral></CarbonNeutral>,
      },
      {
        path: "process",
        element: <Process/>,
      },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);