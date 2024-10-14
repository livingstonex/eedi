import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './routes';
import NavBar from './components/NavBar';

function App() {
  const router = createBrowserRouter(ROUTES);

  return (
    <React.Fragment>
      <NavBar />
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
