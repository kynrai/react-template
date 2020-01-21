import {
  Box,
  ButtonBaseProps,
  createStyles,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
  Typography,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import * as React from 'react';
import StyledButton from 'src/ui/button';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

interface LoginState {
  email: string;
  password: string;
}

const LoginForm: React.FC<Pick<ButtonBaseProps, 'onClick'>> = ({ onClick }) => {
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
  const labelWidth = 0;

  return (
    <Box className={classes.root}>
      <Typography>Login</Typography>
      <TextField variant="outlined" label="email" value={loginState.email} onChange={handleChange('email')} />
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={loginState.password}
          onChange={handleChange('password')}
          labelWidth={labelWidth}
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
      <StyledButton onClick={onClick}>Login</StyledButton>
      <Typography>{JSON.stringify(loginState)}</Typography>
    </Box>
  );
};

export default LoginForm;
