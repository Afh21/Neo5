import FirstApp from "first_app/FirstApp";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SecondApp from "second_app/SecondApp";
import { ContextProvider, WrapperProvider } from "shared/ContextProvider";
import * as transl from "shared/translation";
import Header from "./components/Header";
import "./index.css";
const IntlProvider = React.lazy(() => import("shared/IntlWrapper"));

const App = () => {
   const ctxLocale = React.useContext(ContextProvider);

   return (
      <WrapperProvider>
         <Router>
            <React.Suspense fallback='Loading...'>
               <IntlProvider
                  message={transl.messages[ctxLocale?.state?.language]}
               >
                  <Header messages={transl.messages} />
               </IntlProvider>
            </React.Suspense>
            <Routes>
               <Route path='/first_app' element={<FirstApp />} />
               <Route path='/second_app' element={<SecondApp />} />
            </Routes>
         </Router>
      </WrapperProvider>
   );
};
ReactDOM.render(<App />, document.getElementById("app"));

export default App;
