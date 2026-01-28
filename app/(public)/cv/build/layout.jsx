'use client';
import { CvProvider } from '../../../lib/contexts/CvContext';
import { TabProvider } from '../../../lib/contexts/TabContext';
import { useState } from 'react';



export default function CVBuildLayout({ children }) {
   

    return (
      <CvProvider>
          <TabProvider >
                {children}
        </TabProvider>
      </CvProvider>
    );
}