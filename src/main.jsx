import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root';
import Home from './pages/Home';
import Add from './pages/Add';
import Explore from './pages/Explore';
import Favorites from './pages/Favorites';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Authprovider from './contextapi/Authprovider';
import Privateroute from './private/Privateroute';
import Details from './pages/Details';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/add',
        element: <Privateroute><Add></Add></Privateroute>
      },
      {
        path: '/explore',
        Component: Explore
      },
      {
        path: '/favorites',
        element: <Privateroute><Favorites></Favorites></Privateroute>
      },
      {
        path: '/gallery',
        element: <Privateroute><Gallery></Gallery></Privateroute>
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/details/:id',
        loader: async ({ params }) => await fetch(`https://assignment-10-server-eta-eight.vercel.app/posts/byid/${params.id}`),
        element: <Privateroute><Details></Details></Privateroute>,
        hydrateFallbackElement: <span className="loading loading-spinner text-success"></span>
      }
    ]
  },
  {
    path: '/*',
    Component: NotFound
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
