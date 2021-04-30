import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Repositories from '../pages/Repositories';
import Followers from '../pages/Followers';
import Following from '../pages/Following';
import ViewUser from '../pages/ViewUser';

export default function OtherRoutes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/repos" component={Repositories} />
        <Route exact path="/seguidores" component={Followers} />
        <Route exact path="/seguindo" component={Following} />
        <Route exact path='/seguidores/:login' component={ViewUser}></Route>
      </Switch>
      <Navbar />
    </BrowserRouter>
  );
};

