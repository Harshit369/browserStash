import Header from '#/components/header';
import { Route, RouteSwitch } from '#/router';
import HomeRoute from './home';

function Routes() {
  return (
    <div>
      <Header />

      <RouteSwitch>
        <Route path="/">
          <HomeRoute />
        </Route>
      </RouteSwitch>
    </div>
  );
}

export default Routes;
