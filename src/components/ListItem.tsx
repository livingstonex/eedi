import { useGetUser } from '../queries/useGetUser';
import { useParams } from 'react-router-dom';
import UserCard from './UserCard';
import LoadingShimmer from './LoadingShimmer';
import CancelIcon from './CancelIcon';

function MainContent() {
  const { id } = useParams<{ id: string }>();
  const { data, status } = useGetUser(Number(id));

  switch (status) {
    case 'pending':
      return <LoadingShimmer />;
    case 'error':
      return <h1 className='flex items-center'>Error loading data</h1>;
    case 'success':
      return <UserCard user={data} />;
    default:
      return null;
  }
}

export default function ListItem() {
  return (
    <div className='bg-blue-100'>
      <CancelIcon />
      <div className='min-h-full w-80 flex justify-center items-center p-8'>
        <MainContent />
      </div>
    </div>
  );
}
