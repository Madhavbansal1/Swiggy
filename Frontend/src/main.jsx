import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import Offers from './components/Offers.jsx';
import Help from './components/Help.jsx';
import Signin from './components/Signin.jsx';
import Body from './components/Body.jsx';
import Cart from './components/Cart.jsx';

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/offers',
        element: <Offers />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
      {
        path: '/cart',
        element: <Cart/>,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoutes} />
  </StrictMode>
);
