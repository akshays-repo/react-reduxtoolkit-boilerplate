import { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapeterMoment from '@mui/lab/AdapterMoment';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const MainWrapper = styled(Box)(
  ({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
        
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            padding-left: ${theme.sidebar.width};
        }
`
);

const MainContent = styled(Box)(
  ({ theme }) => `
        margin-top: ${theme.header.height};
        flex: 1 1 auto;
        overflow: auto;
`
);

const AppMainLayoutB: FC<SidebarLayoutProps> = () => {
  return (
    <div
      style={{ backgroundColor: '#f2f5f9', minHeight: '100vh' }}
      className='app-layout'
    >
      <Sidebar />
      <MainWrapper>
        <Header />

        <MainContent>
          <Container maxWidth='lg'>
            <Grid
              container
              direction='row'
              justifyContent='center'
              alignItems='stretch'
              spacing={3}
            >
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapeterMoment}>
                  <Outlet />
                </LocalizationProvider>
                <br />
              </Grid>
            </Grid>
          </Container>
        </MainContent>
      </MainWrapper>
    </div>
  );
};
export default AppMainLayoutB;


