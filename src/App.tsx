import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './routes';
import NavBar from './components/NavBar';

function App() {
  const router = createBrowserRouter(ROUTES);

  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
