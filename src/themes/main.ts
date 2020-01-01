import { createMuiTheme } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const mainTheme: ThemeOptions = {
  palette: { primary: yellow },
};

export default createMuiTheme(mainTheme);
