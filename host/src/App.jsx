import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

const FirstApp = React.lazy(() => import("first_app/FirstApp"));
const SecondApp = React.lazy(() => import("second_app/SecondApp"));

const App = () => (
   <Router>
      <div className='container'>
         <Routes>
            <Route
               path='/first'
               element={
                  <React.Suspense fallback='loading...'>
                     <FirstApp />
                  </React.Suspense>
               }
            />
            <Route
               path='/second'
               element={
                  <React.Suspense fallback='loading...'>
                     <SecondApp />
                  </React.Suspense>
               }
            />
         </Routes>
      </div>

      <h1 className='container__title'>Character Lists</h1>
      <div className='container__btn_group'>
         <Link className='btn btn__primary' to='/first'>
            First App
         </Link>
         <Link className='btn btn__secondary' to='/second'>
            Second App
         </Link>
      </div>
   </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
