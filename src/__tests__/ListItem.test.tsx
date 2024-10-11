import { render, screen } from '@testing-library/react';
import ListItem from '../components/ListItem';
import { MemoryRouter } from 'react-router-dom';
import { useGetUser } from '../queries/useGetUser';
import { vi, Mock } from 'vitest';
import z from 'zod';
import { userSchema } from '../api/user';

type User = z.infer<typeof userSchema>;

type ListItemProps = {
  user: User;
};

// Mock the useGetUser hook
vi.mock('../queries/useGetUser');

// Mock UserCard component
vi.mock('../components/UserCard', () => {
  return {
    default: function MockUserCard({ user }: ListItemProps) {
      return <div>{user.name}</div>;
    },
  };
});

describe('ListItem Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('displays loading state', () => {
    (useGetUser as Mock).mockReturnValue({
      status: 'pending',
    });

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <ListItem />
      </MemoryRouter>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays error message', () => {
    (useGetUser as Mock).mockReturnValue({
      status: 'error',
    });

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <ListItem />
      </MemoryRouter>,
    );

    expect(screen.getByText('Error loading data')).toBeInTheDocument();
  });

  it('renders user data on success', () => {
    const mockUser = { id: 1, name: 'John Doe' };

    (useGetUser as Mock).mockReturnValue({
      status: 'success',
      data: mockUser,
    });

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <ListItem />
      </MemoryRouter>,
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
