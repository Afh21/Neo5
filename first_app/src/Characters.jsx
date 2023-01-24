import React from "react";

const CardList = React.lazy(() => import("shared/CardList"));
const IntlFormatterMsg = React.lazy(() =>
   import("shared/IntlFormatterMessage")
);

function Characters({ data }) {
   return (
      <React.Suspense fallback={"Loading"}>
         <h2>
            <IntlFormatterMsg id='title_first_app' />
         </h2>
         <CardList items={data?.results} />
      </React.Suspense>
   );
}

export default Characters;
