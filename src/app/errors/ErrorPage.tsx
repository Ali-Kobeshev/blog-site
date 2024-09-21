import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import cl from "./ErrorPage.module.scss";

export const ErrorPage: React.FC = () => {
   const error = useRouteError();
   let errorMessage: string;

   if (isRouteErrorResponse(error)) {
      // error is type `ErrorResponse`
      errorMessage = error.data?.message || error.statusText;
   } else if (error instanceof Error) {
      errorMessage = error.message;
   } else if (typeof error === "string") {
      errorMessage = error;
   } else {
      console.error(error);
      errorMessage = "Unknown error";
   }

   return (
      <div className={cl.page}>
         <h1>Oops!</h1>
         <p>Sorry, an unexpected error has occurred.</p>
         <p>
            <i>{errorMessage}</i>
         </p>
      </div>
   );
};
