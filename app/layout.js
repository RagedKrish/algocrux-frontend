import localFont from "next/font/local";
import "./globals.css";
import "./style.css"

const geistSans = localFont({
  src: "./fonts/instrument.ttf",
  weight: "400 500",
});

export const metadata = {
  title: "AlgoCrux",
  description: "AlgoCrux is an open-source community that manages users for their valuable contributions to open-source repositories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={geistSans.className}
      >
        {children}
      </body>
    </html>
  );
}