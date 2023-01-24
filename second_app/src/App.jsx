import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider as Context } from "shared/ContextProvider";
import * as hooks from "shared/hooks";
import * as transl from "shared/translation";
import "./index.css";

const API_URL = "https://hp-api.onrender.com/api/characters";
const CardList = React.lazy(() => import("shared/CardList"));
const IntlProvider = React.lazy(() => import("shared/IntlWrapper"));
const IntlFormatterMsg = React.lazy(() =>
   import("shared/IntlFormatterMessage")
);

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
                     <h2>
                        <IntlFormatterMsg id='title_second_app' />
                     </h2>
                     <CardList items={data && data} />
                  </IntlProvider>
               </React.Suspense>
            }
         />
      </Routes>
   );
};

ReactDOM.render(
   <BrowserRouter basename='/second_app'>
      <App />
   </BrowserRouter>,
   document.getElementById("app")
);

export default App;
