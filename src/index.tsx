import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastProvider } from 'react-toast-notifications'
import * as serviceWorker from "./serviceWorker";
import { IntlProvider } from "react-intl";
import Chinese from "./lang/cn.json";
import Indonesian from "./lang/id.json";
import English from "./lang/en.json";
import Wrapper from "./Component/Wrapper";
import { Provider } from "react-redux";
import store from "./Api/reducers/store";

import axios from "axios";

axios.defaults.baseURL = "https://4000-lutonda-omkurirserver-j99bhg02iia.ws-eu47.gitpod.io/api/v2/"

let locale = navigator.language;

let lang: any;
if (locale === "en") {
  lang = English;
} else {
  if (locale === "cn") {
    lang = Chinese;
  } else {
    lang = Indonesian;
    locale = "id";
  }
}
lang = Indonesian;
locale = "id";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={English}>
      <Provider store={store}>
        <ToastProvider autoDismissTimeout={5000} transitionDuration={500}>
          <Wrapper>
            <App />
          </Wrapper>
        </ToastProvider>
      </Provider>
    </IntlProvider>
  </React.StrictMode>
);

reportWebVitals();
serviceWorker.unregister();
