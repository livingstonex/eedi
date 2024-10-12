import { render, screen } from '@testing-library/react';
import Lists from '../components/Lists';
import { MemoryRouter } from 'react-router-dom'; // Needed for NavLink
import { z } from 'zod';
import { usersSchema } from '../api/users';
import { describe, test, expect } from 'vitest';

type User = z.infer<typeof usersSchema>[number];

const mockData: User[] = [
  { id: 1, name: 'John Doe', email: 'john@test.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@test.com' },
];

describe('Lists Component', () => {
  test('renders individual users links correctly', () => {
    render(
      <MemoryRouter>
        <Lists data={mockData} />
      </MemoryRouter>,
    );

    mockData.forEach((user) => {
      const linkElement = screen.getByText(user.name);
      expect(linkElement).toBeTruthy();
      expect(linkElement).toHaveAttribute('href', `/details/${user.id}`);
    });
  });

  test('renders Pagination component', () => {
    render(
      <MemoryRouter>
        <Lists data={mockData} />
      </MemoryRouter>,
    );

    // Check that Pagination is rendered
    const paginationElement = screen.getByTestId(/pagination/i); // Adjust based on Pagination content
    expect(paginationElement).toBeInTheDocument();
  });
});
