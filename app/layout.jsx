
import "@/styles/globals.css";
import { Providers } from "@/providers/TanstackProviders";

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
