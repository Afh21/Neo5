import React from "react";
import { LOCALES } from "../i18n/locales";

export const ContextProvider = React.createContext({});

export const WrapperProvider = ({ children }) => {
   const [state, setState] = React.useState({
      language: LOCALES.ENGLISH,
   });

   return (
      <ContextProvider.Provider value={{ state, setState }}>
         {children}
      </ContextProvider.Provider>
   );
};
