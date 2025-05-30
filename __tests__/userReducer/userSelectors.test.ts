import {
  selectIsAuthenticated,
  selectUser,
  selectUserName,
  selectIsAuthChecked,
  selectUserError
} from '../../src/selectors/userSelectors';

describe('userSelectors', () => {
  const state = {
    user: {
      error: { message: 'Ошибка' },
      user: { name: 'John Doe', email: 'john@example.com' },
      isAuthenticated: true,
      isAuthChecked: true,
      isLoading: false
    }
  };

  const userMock = { name: 'John Doe', email: 'john@example.com' };

  test('selectIsAuthChecked returns true', () => {
    expect(selectIsAuthChecked(state as any)).toBe(true);
  });

  test('selectUser returns user object', () => {
    expect(selectUser(state as any)).toEqual(userMock);
  });

  test('selectIsAuthenticated returns true', () => {
    expect(selectIsAuthenticated(state as any)).toBe(true);
  });

  test('selectUserError returns error object', () => {
    expect(selectUserError(state as any)).toEqual({ message: 'Ошибка' });
  });

  test('selectUserName returns user name', () => {
    expect(selectUserName(state as any)).toBe('John Doe');
  });
});