import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

export const App = () => (
   <div className='container'>
      <div>Name: first_app</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
   </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
