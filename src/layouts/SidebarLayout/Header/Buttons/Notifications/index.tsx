import { alpha, Badge, IconButton, Tooltip } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import NotificationsActiveTwoToneIcon from '@mui/icons-material/NotificationsActiveTwoTone';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../../routes/paths';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';


const NotificationsBadge = styled(Badge)(
  ({ theme }) => `
    
    .MuiBadge-badge {
        background-color: ${alpha(theme.palette.error.main, 0.1)};
        color: ${theme.palette.error.main};
        min-width: 16px; 
        height: 16px;
        padding: 0;

        &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 0 0 0 1px ${alpha(theme.palette.error.main, 0.3)};
            content: "";
        }
    }
`
);

function HeaderNotifications() {
  const ref = useRef<any>(null);

  const navigate = useNavigate();

  const handleOpen = (): void => {
   
  };



  return (
    <>
      <Tooltip arrow title='Notifications'>
        <IconButton color='primary' ref={ref} onClick={handleOpen}>
          <NotificationsBadge
            badgeContent={0}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <NotificationsActiveTwoToneIcon />
          </NotificationsBadge>
        </IconButton>
      </Tooltip>
    </>
  );
}

export default HeaderNotifications;
