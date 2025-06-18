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
import Error from './components/Error.jsx';
import RestaurantDetails from './components/RestaurantDetails.jsx';
import Clock from './components/Clock.jsx';

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
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
        element: <Cart />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantDetails />
      },
      {
        path: '/clock',
        element: <Clock/>,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoutes} />
  </StrictMode>
);
