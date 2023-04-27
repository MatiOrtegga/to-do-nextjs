"use client";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Favicon from "../../public/favicon.png";
export const metadata = {
  title: "To-Do NextJs",
  description: "An simple To-Do list created with NextJs",
};
export default function RootLayout({ children }) {
  console.log(Favicon.src);
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href={Favicon.src} />
      </head>
      <body>
        {children}
        {useEffect(() => {
          require("../../node_modules/bootstrap/dist/js/bootstrap.bundle.js");
        }, [])}
      </body>
    </html>
  );
}
