import "./globals.css?v=6";
import { Providers } from "./lib/providers";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={` antialiased bg-third`}>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
