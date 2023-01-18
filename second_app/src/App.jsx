import * as transl from "shared/translation";
import * as hooks from "shared/hooks";
import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

const API_URL = "https://hp-api.onrender.com/api/characters";
const CardList = React.lazy(() => import("shared/CardList"));
const IntlProvider = React.lazy(() => import("shared/IntlWrapper"));
const IntlFormatterMsg = React.lazy(() =>
   import("shared/IntlFormatterMessage")
);
const locale = transl.LOCALES.ENGLISH;

const App = () => {
   const { data } = hooks.useFetch(API_URL);

   return (
      <div className='container'>
         <React.Suspense fallback={"loading"}>
            <IntlProvider message={transl.messages[locale]}>
               <p>
                  <IntlFormatterMsg id='title_second_app' />
               </p>
               <CardList items={data && data} />
            </IntlProvider>
         </React.Suspense>
      </div>
   );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
