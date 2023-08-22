import "@/styles/globals.css";

export const metadata = {
  title: "Portfolio - Ghizlane EL ATMANI",
  description:
    "Portfolio of a great frontend developer using React and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="business">
      <body>
        <main id="content">{children}</main>
      </body>
    </html>
  );
}
