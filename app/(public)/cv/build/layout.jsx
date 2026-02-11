'use client';

import { CvProvider } from "@/contexts/CvContext";
import { TabProvider } from "@/contexts/TabContext";




export default function CVBuildLayout({ children }) {
   

    return (
      <CvProvider>
          <TabProvider >
                {children}
        </TabProvider>
      </CvProvider>
    );
}