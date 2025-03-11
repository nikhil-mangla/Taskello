import { ClerkProvider } from "@clerk/nextjs";
import React from 'react';

const PlatformLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <ClerkProvider>
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;