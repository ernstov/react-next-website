import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App.jsx";
import TagManager from 'react-gtm-module'
import { settings } from "./data/settings";

const tagManagerArgs = {
  gtmId: settings.gtmId,
  // dataLayerName: gtmDataLayerName
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
