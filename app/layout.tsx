import "./globals.css";
import Aside from "@/components/Aside";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className='lg:grid lg:grid-cols-[300px_1fr] h-screen bg-1f select-none dark:bg-dark1f overflow-y-auto'>
          <Aside/>
          {children}
        </div>
      </body>
    </html>
  );
}
