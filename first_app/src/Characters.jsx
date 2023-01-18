import React from "react";

const CardList = React.lazy(() => import("shared/CardList"));
const IntlFormatterMsg = React.lazy(() =>
   import("shared/IntlFormatterMessage")
);

function Characters({ data }) {
   return (
      <React.Suspense fallback={"loading"}>
         <p>
            <IntlFormatterMsg id='title_first_app' />
         </p>
         <CardList items={data?.results} />
      </React.Suspense>
   );
}

export default Characters;
