import "./globals.css";
import AOSInitializer from "./components/AOSInitializer.js"; // ✅ Import the client component

export const metadata = {
  title: "Zohaib Portfolio",
  description: "Professional Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white">
        <AOSInitializer /> {/* ✅ This runs useEffect safely in client */}
        {children}
      </body>
    </html>
  );
}
