import {
  Box,
  Button,
  createStyles,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import * as React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

interface Props {
  onSubmit: (email: string, password: string) => void;
}

interface LoginState {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [loginState, setLoginState] = React.useState<LoginState>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleChange = (prop: keyof LoginState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({ ...loginState, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography>Login</Typography>
      <TextField variant="outlined" label="email" value={loginState.email} onChange={handleChange('email')} />
      <FormControl variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={loginState.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button>Login</Button>
      <Typography>{JSON.stringify(loginState, null, '\t')}</Typography>
    </Box>
  );
};

export default LoginForm;
