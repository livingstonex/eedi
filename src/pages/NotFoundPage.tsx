import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className='flex gap-2 justify-center items-center mt-40'>
      404 - Page not found -<Link to='/'>Home</Link>
    </div>
  );
}
