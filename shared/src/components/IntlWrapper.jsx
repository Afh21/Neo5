import React from "react";
import { IntlProvider } from "react-intl";

const IntlWrapper = ({ children, locale = "en", message = {} }) => {
   return (
      <IntlProvider locale={locale} messages={message} defaultLocale='en'>
         {children}
      </IntlProvider>
   );
};

export default IntlWrapper;
