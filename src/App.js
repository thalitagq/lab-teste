import AuthProvider from './contexts/auth'
import Routes from './routes';
import { StylesProvider } from "@material-ui/styles";
import { Grid } from '@material-ui/core';

function App() {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
