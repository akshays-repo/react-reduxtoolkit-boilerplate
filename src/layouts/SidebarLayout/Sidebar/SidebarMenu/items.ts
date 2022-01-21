import { ReactNode } from 'react';

import AirplayIcon from '@mui/icons-material/Airplay';
import { ROUTES } from '../../../../routes/paths';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'DASHBOARD',
    items: [
      {
        name: 'Overview',
        link: ROUTES.HOME,
        icon: AirplayIcon,
      },
      // {
      //   name: 'Notifcation',
      //   link: ROUTES.NOTIFICATION,
      //   icon: AirplayIcon,
      // },
    ],
  },
];

export default menuItems;
