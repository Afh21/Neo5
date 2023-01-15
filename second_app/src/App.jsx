import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useFetch } from "../../shared/src/hooks/useFetch";

const API_URL = "https://hp-api.onrender.com/api/characters";
const CardList = React.lazy(() => import("shared/CardList"));

const App = () => {
   const { data } = useFetch(API_URL);

   return (
      <div className='container'>
         <React.Suspense fallback={"loading"}>
            <CardList items={data ?? []} />
         </React.Suspense>
      </div>
   );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
