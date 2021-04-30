import AuthProvider from './contexts/auth'
import Routes from './routes';
import { StylesProvider } from "@material-ui/styles";
import { Grid } from '@material-ui/core';
import NavbarProvider from './contexts/navbarContext';

function App() {
  return (
    <AuthProvider>
      <NavbarProvider>
        <StylesProvider injectFirst>
          <Grid
            container
            direction = "column"
            justify = "center"
            alignItems = "center" 
          >
            <Routes/>
          </Grid>
        </StylesProvider>
      </NavbarProvider>
    </AuthProvider>
  );
}

export default App;
