import { monserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${monserrat.className} antialiased`}>
            {children}

            <footer className='py-10 flex justify-center items-center'>
              Make with ❤️ by the people of Vercel
            </footer>
          </body>
    </html>
  );
}
