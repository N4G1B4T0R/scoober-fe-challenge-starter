import React, { FC, ReactNode } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { AppFooter, AppHeader } from 'shared/UI-kit';
import { useSelector } from 'react-redux';
import { getUsernameSelector } from 'shared/services/auth/selector';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  const username = useSelector(getUsernameSelector);

  return (
    <>
      <AppHeader username={username} />
      <Box sx={{ bgcolor: '#F8F5F2', height: 'calc(100vh - 106px)' }}>
        <Container component="main">
          <Box display="flex">{children}</Box>
        </Container>
      </Box>
      <AppFooter />
    </>
  );
};

export { Layout };
