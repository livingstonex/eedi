/**
 * Ideally, we would need to paginate the list of users, and this provides a JSX template
 * for that the ui of the pagination component would look like.
 *
 * ALTERNATIVELY:
 *  - We could use infinite scroll to handle pagination.
 *
 * NOTE: The only reason why we're not implementing pagination now is because the given API (https://jsonplaceholder.typicode.com/users), does not support pagination.
 *       And it wouldn't be optimized to handle it statically on the frontend, as that is not a scalable solution.
 */

function Pagination() {
  return (
    <nav
      className='mt-8'
      aria-label='List navigation sample'
      data-testid='pagination'
    >
      <ul className='inline-flex -space-x-px text-sm'>
        <li>
          <a
            href='#'
            className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Previous
          </a>
        </li>
        <li>
          <a
            href='#'
            aria-current='page'
            className='flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
          >
            1
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            2
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            3
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            4
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            5
          </a>
        </li>
        <li>
          <a
            href='#'
            className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
