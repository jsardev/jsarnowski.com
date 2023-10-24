import React from 'react';

import SEO from './SEO';

import '@fontsource/cairo/700.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

export default ({ children }) => (
  <React.Fragment>
    <SEO lang="en" />
    <main className="text-xs lg:text-base relative overflow-hidden flex items-center justify-center h-screen">
      {children}
    </main>
  </React.Fragment>
);
