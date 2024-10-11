import { useGetUsers } from '../queries/useGetUsers';
import Lists from '../components/Lists';
import { ErrorBoundary } from 'react-error-boundary';

function MainContent() {
  const { data, status } = useGetUsers();

  switch (status) {
    case 'pending':
      return (
        <h1 className='flex justify-center items-center mt-20'>Loading...</h1>
      );
    case 'error':
      return (
        <h1 className='flex justify-center items-center mt-20'>
          Error loading data. Please connect to a WiFi and refresh.
        </h1>
      );
    case 'success':
      return (
        <div className='max-w-screen-xl flex items-center xs:justify-between pl-4 md:justify-start mx-auto'>
          <Lists data={data} />
        </div>
      );
    default:
      return null;
  }
}

export default function HomePage() {
  return (
    <ErrorBoundary
      fallback={<div>Something went wrong! Please try again later.</div>}
    >
      <MainContent />
    </ErrorBoundary>
  );
}
