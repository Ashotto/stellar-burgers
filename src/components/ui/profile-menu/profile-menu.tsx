import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileMenuUIProps } from './type';
import styles from './profile-menu.module.css';

export const ProfileMenuUI: FC<ProfileMenuUIProps> = ({ pathname, handleLogout }) => (
  <>
    <button
      className={`text_color_inactive pt-4 pb-4 text text_type_main-medium ${styles.button}`}
      onClick={handleLogout}
    >
      Выход
    </button>
    <NavLink
      end
      to={'/profile'}
      className={({ isActive }) =>
        `text_color_inactive pt-4 pb-4 text text_type_main-medium ${
          styles.link
        } ${isActive ? styles.link_active : ''}`
      }
    >
      Профиль
    </NavLink>
    <NavLink
      to={'/profile/orders'}
      className={({ isActive }) =>
        `pt-4 pb-4 text text_type_main-medium text_color_inactive ${
          styles.link
        } ${isActive ? styles.link_active : ''}`
      }
    >
      История заказов
    </NavLink>
    <p className='text text_type_main-default text_color_inactive pt-20'>
      {pathname === '/profile'
        ? 'В этом разделе вы можете изменить свои персональные данные'
        : 'В этом разделе вы можете просмотреть свою историю заказов'}
    </p>
  </>
);