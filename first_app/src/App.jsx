import * as transl from "shared/translation";
import * as hooks from "shared/hooks";
import Characters from "./Characters";
import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

const API_URL = "https://rickandmortyapi.com/api/character";
const IntlProvider = React.lazy(() => import("shared/IntlWrapper"));
const locale = transl.LOCALES.ENGLISH;

const App = () => {
   const { data } = hooks.useFetch(API_URL);

   return (
      <div className='container'>
         <React.Suspense fallback={"loading"}>
            <IntlProvider message={transl.messages[locale]}>
               <Characters data={data ?? []} />
            </IntlProvider>
         </React.Suspense>
      </div>
   );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
