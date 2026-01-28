import { Providers } from "./lib/providers";
import "@/app/globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
