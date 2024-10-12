import { NavLink, Outlet } from 'react-router-dom';
import { usersSchema } from '../api/users';
import z from 'zod';
import Pagination from './Pagination';

type User = z.infer<typeof usersSchema>[number];

type ListsProps = {
  data: User[];
};

function Lists({ data }: ListsProps) {
  return (
    <div className='flex xs:justify-center mt-20 sm:gap-20 flex-wrap-reverse'>
      <div className='flex flex-col items-center sm:items-start gap-2 mt-10 mb-5 sm:mt-0'>
        {data.map((item) => (
          <div>
            <NavLink
              aria-label={item.name}
              key={item.id}
              to={`/details/${item.id}`}
              className={({ isActive }) =>
                isActive ? 'text-violet-700 text-3xl' : 'text-2xl'
              }
            >
              {item.name}
              <p className=' text-sm'>{item.email}</p>
            </NavLink>
          </div>
        ))}

        <Pagination />
      </div>

      <Outlet />
    </div>
  );
}

export default Lists;
