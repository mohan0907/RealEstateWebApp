import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
        <App />
     </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
