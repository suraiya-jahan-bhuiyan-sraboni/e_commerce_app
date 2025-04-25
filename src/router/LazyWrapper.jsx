import React, { Suspense } from 'react';

const LazyWrapper = ({ children }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export default LazyWrapper;