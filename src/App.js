import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EarthquakeContext from "./context/earthquakes";
import UserContext from "./context/user";
import Header from "./components/header/Header";
import useEarthquakes from "./hooks/use-earthquakes";
import * as ROUTES from "./constants/routes";
import useUser from "./hooks/use-user";
import styles from "./App.css";

const Earthquakes = lazy(() => import("./views/earthquakes/index"));
const Profile = lazy(() => import("./views/profile/profile"));
const Earthquake = lazy(() => import("./views/earthquakes/earthquake"));
const NotFound = lazy(() => import("./views/not-found"));

function App() {
  let { user } = useUser();
  let { earthquakes } = useEarthquakes();
  return (
    <>
      <UserContext.Provider value={{ user }}>
        <EarthquakeContext.Provider value={{ earthquakes }}>
          <Router>
            <Suspense fallback={<p>Loading...</p>}>
              <Header />
              <div className={styles.container}>
                <Switch>
                  <Route path={ROUTES.EARTHQUAKES} component={Earthquakes} exact />
                  <Route path={ROUTES.EARTHQUAKE} component={Earthquake} />
                  <Route path={ROUTES.PROFILE} component={Profile} />
                  <Route path={ROUTES.NOT_FOUND} component={NotFound} />
                </Switch>
              </div>
            </Suspense>
          </Router>
        </EarthquakeContext.Provider>
      </UserContext.Provider>
    </>
  );
}
export default App;
