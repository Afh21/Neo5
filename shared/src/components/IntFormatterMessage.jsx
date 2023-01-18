import React from "react";
import { FormattedMessage } from "react-intl";

const IntFormatterMessage = ({ id, values, description, message }) => {
   return (
      <FormattedMessage
         id={id}
         values={values}
         description={description}
         defaultMessage={message}
      />
   );
};

export default IntFormatterMessage;
