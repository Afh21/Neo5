import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider as Context } from "shared/ContextProvider";
import * as hooks from "shared/hooks";
import * as transl from "shared/translation";
import Characters from "./Characters";
import "./index.css";

const API_URL = "https://rickandmortyapi.com/api/character";
const IntlProvider = React.lazy(() => import("shared/IntlWrapper"));

const App = () => {
   const { data } = hooks.useFetch(API_URL);
   const ctxLocale = React.useContext(Context);

   return (
      <Routes>
         <Route
            index
            element={
               <React.Suspense fallback='Loading...'>
                  <IntlProvider
                     message={transl.messages[ctxLocale?.state?.language]}
                  >
                     <Characters data={data ?? []} />
                  </IntlProvider>
               </React.Suspense>
            }
         />
      </Routes>
   );
};

ReactDOM.render(
   <BrowserRouter basename='/first_app'>
      <App />
   </BrowserRouter>,
   document.getElementById("app")
);

export default App;
