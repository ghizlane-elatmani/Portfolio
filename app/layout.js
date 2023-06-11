import "@/styles/globals.css";
import "@/styles/gradiants.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "Portfolio - Ghizlane EL ATMANI",
  description:
    "Portfolio of a great frontend developer using React and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main id="content">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
