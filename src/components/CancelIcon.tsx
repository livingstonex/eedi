import { Link } from 'react-router-dom';

function CancelIcon() {
  return (
    <Link
      to={'/'}
      aria-label='Cancel button'
      className='flex justify-end mt-4 mr-4 hover:cursor-pointer text-xl'
    >
      <svg
        className='w-3.5 h-3.5'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 16 16'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4 4l8 8M4 12l8-8'
        />
      </svg>
    </Link>
  );
}

export default CancelIcon;
