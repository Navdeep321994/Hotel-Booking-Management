import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Favicon from "react-favicon";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchContextProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
      {/* <Favicon url="http://oflisback.github.io/react-favicon/img/github.ico" /> */}
        <App />
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
