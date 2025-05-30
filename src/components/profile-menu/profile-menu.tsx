import { FC, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';
import { useAppDispatch } from '../../services/store';
import { fetchLogoutUser } from '../../slices/userSlice';
import { AppRoutes } from '../../app/appRoutes';

export const ProfileMenu: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(async () => {
    try {
      await dispatch(fetchLogoutUser()).unwrap();
      navigate(AppRoutes.LOGIN);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }, [dispatch, navigate]);

  return <ProfileMenuUI handleLogout={handleLogout} pathname={pathname} />;
};