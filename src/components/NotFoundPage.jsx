import React from "react";

import { useRouteError } from "react-router-dom";

function NotFoundPage() {
  const error = useRouteError();
  return (
    <div>
      <i>{error.statusText || error.message}</i>
      <h1>Oops! You've come to a wrong page</h1>

      <h2>Head Back to Home Page</h2>

      <h2>or Return to Previous Page</h2>
    </div>
  );
}

export default NotFoundPage;
