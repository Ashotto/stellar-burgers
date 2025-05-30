import { RootState } from 'src/services/store';

export const selectIsAuthChecked = (state: RootState) => state.user.isAuthChecked;
export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated;
export const selectUser = (state: RootState) => state.user.user;
export const selectUserError = (state: RootState) => state.user.error;
export const selectUserName = (state: RootState) => state.user.user?.name;