function LoadingShimmer() {
  return (
    <div role='status' className='max-w-sm animate-pulse'>
      <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4' />
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[360px] mb-2.5' />
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5' />
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[330px] mb-2.5' />
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[300px] mb-2.5' />
      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[360px]' />
      <span className='sr-only'>Loading...</span>
    </div>
  );
}

export default LoadingShimmer;
