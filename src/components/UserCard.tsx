import { userSchema } from '../api/user';
import z from 'zod';

type User = z.infer<typeof userSchema>;

type ListItemProps = {
  user: User;
};

function UserCard({ user }: ListItemProps) {
  const { address } = user;

  return (
    <div className='w-full max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex flex-col items-center justify-center pb-5'>
        <img
          className='w-24 h-24 mb-3 rounded-full shadow-lg'
          src='https://images.unsplash.com/photo-1455894127589-22f75500213a'
          alt='Bonnie image'
        />
        <h5 className='mb-1 text-md font-medium text-gray-900 dark:text-white'>
          {user.name}
        </h5>
        <span className='text-sm text-gray-500 dark:text-gray-400'>
          {user.phone}
        </span>
        <h5 className='mb-1 mt-5 text-md font-medium text-gray-900 dark:text-white'>
          Address
        </h5>
        <span className='text-sm text-center text-gray-500 dark:text-gray-400'>{`${address.suite} - ${address.street}, ${address.city}, ${address.zipcode}.`}</span>
      </div>
    </div>
  );
}

export default UserCard;
