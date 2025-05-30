import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';
import { AppRoutes } from '../../app/appRoutes';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const getLinkClass = (isActive: boolean) => 
    `${styles.link} ${isActive ? styles.link_active : ''}`;

  const navItems = [
    {
      route: AppRoutes.HOME,
      icon: BurgerIcon,
      text: 'Конструктор',
      testId: 'constructor-link'
    },
    {
      route: AppRoutes.FEED,
      icon: ListIcon,
      text: 'Лента заказов',
      testId: 'feed-link'
    },
    {
      route: AppRoutes.PROFILE,
      icon: ProfileIcon,
      text: userName || 'Личный кабинет',
      testId: 'profile-link'
    }
  ];

  return (
    <header className={styles.header}>
      <nav className={`${styles.menu} p-4`}>
        <div className={styles.menu_part_left}>
          {navItems.slice(0, 2).map((item) => (
            <NavLink
              key={item.route}
              to={item.route}
              className={({ isActive }) => getLinkClass(isActive)}
              onClick={() => setActiveTab(item.route)}
              data-testid={item.testId}
            >
              <item.icon type={activeTab === item.route ? 'primary' : 'secondary'} />
              <p className='text text_type_main-default ml-2'>
                {item.text}
                {item.route === AppRoutes.HOME && <span className='mr-10' />}
              </p>
            </NavLink>
          ))}
        </div>

        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.link_position_last}>
          <NavLink
            to={navItems[2].route}
            className={({ isActive }) => getLinkClass(isActive)}
            onClick={() => setActiveTab(navItems[2].route)}
            data-testid={navItems[2].testId}
          >
            <navItems[2].icon type={activeTab === navItems[2].route ? 'primary' : 'secondary'} />
            <p className='text text_type_main-default ml-2'>
              {navItems[2].text}
            </p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};