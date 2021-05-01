import AuthProvider from './contexts/auth'
import Routes from './routes';
import { StylesProvider } from "@material-ui/styles";
import { Grid } from '@material-ui/core';
import NavbarProvider from './contexts/navbarContext';
import { Suspense } from 'react';

const renderLoader = () => <p>Loading </p>

function App() {
  return (
    <AuthProvider>
      <NavbarProvider>
        <StylesProvider injectFirst>
          <Suspense fallback={renderLoader()}>
            <Grid
              container
              direction = "column"
              justify = "center"
              alignItems = "center" 
            >
              <Routes/>
            </Grid>
          </Suspense>  
        </StylesProvider>
      </NavbarProvider>
    </AuthProvider>
  );
}

export default App;
