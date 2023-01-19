import React from "react";

import MainScreen from "./components/MainScreen";
import { Route, Switch } from "react-router-dom";
import EventScreen from "./components/EventScreen";
import BioScreen from "./components/BioScreen";
import MusicScreen from "./components/MusicScreen";

function App(): JSX.Element {
  return (
    <Switch>
      <Route path={"/music"}>
        <MusicScreen />
      </Route>
      <Route path={"/bio"}>
        <BioScreen />
      </Route>
      <Route path={"/events"}>
        <EventScreen />
      </Route>
      <Route>
        <MainScreen />
      </Route>
    </Switch>
  );
}

export default App;
