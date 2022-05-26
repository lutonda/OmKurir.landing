import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import * as serviceWorker from './serviceWorker';
import { IntlProvider } from "react-intl";
import Chinese from "./lang/cn.json";
import Indonesian from "./lang/id.json";
import English from "./lang/en.json";
import Wrapper from "./Component/Wrapper";


let locale = navigator.language;

let lang:any;
if (locale === 'en') {
    lang = English;
}else {
    if (locale === 'cn') {
        lang = Chinese;
    } else {
        lang = Indonesian;
        locale = 'id';
    }
}
lang = Indonesian;
        locale = 'id';
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={English}>
    <Wrapper>
        <App date = {Date.now()}/>
    </Wrapper>,
    </IntlProvider>
  </React.StrictMode>
);

//serviceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();
