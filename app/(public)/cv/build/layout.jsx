'use client';

import { CvProvider } from "@/features/cv/contexts/CvContext";
import { TabProvider } from "@/features/cv/contexts/TabContext";




export default function CVBuildLayout({ children }) {
   

    return (
      <CvProvider>
          <TabProvider >
                {children}
        </TabProvider>
      </CvProvider>
    );
}