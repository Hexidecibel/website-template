import "core-js/stable";
import "regenerator-runtime/runtime";

import ReactDOM from "react-dom";
import React from "react";
import "../../../global.d.ts";
import Loading from "./components/Loading";

const AppLoader = React.lazy(async () => {
  return (await Promise.all([import("./AppLoader")]))[0];
});

ReactDOM.render(
  <React.Suspense fallback={<Loading />}>
    <AppLoader />
  </React.Suspense>,
  document.getElementById("web")
);
