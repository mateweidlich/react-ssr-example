import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h2>Ooooops, route not found!</h2>;
};

export default {
  component: NotFoundPage
};
