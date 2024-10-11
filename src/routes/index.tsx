import '../tailwind.style.css';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ListItem from '../components/ListItem';

export const ROUTES = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/details/:id',
        element: <ListItem />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
];
