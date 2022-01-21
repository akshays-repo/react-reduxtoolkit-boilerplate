import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { authApi } from './authApi';
import { ErrorAlert } from '../../components/ErrorAlert';
import { LOCAL_STORE } from '../../constants/localStorageKeys';
import { ROUTES } from '../../routes/paths';
import { useNavigate } from 'react-router';

function AppLogin(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {' WeStock Manager © '}
      {/* <Link color="inherit" href="https://mui.com/">
        WeStock Manager
      </Link>{" "} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError(false);
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await authApi({
        username: data.get('username')?.toString(),
        password: data.get('password')?.toString(),
        application_id: 1,
      });

      if (response.key) {
        const userName = data.get('username')?.toString() || '';

        localStorage.setItem(LOCAL_STORE.TOKEN, response.key);
        localStorage.setItem(LOCAL_STORE.USERNAME, userName);

        navigate(ROUTES.HOME, { replace: true });
        // window.location.href = ROUTES.HOME;
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>

        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <ErrorAlert alertMessage='something went wrong' show={error} />

          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Username'
            name='username'
            autoComplete='username'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container></Grid>
        </Box>
      </Box>

      <AppLogin sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
