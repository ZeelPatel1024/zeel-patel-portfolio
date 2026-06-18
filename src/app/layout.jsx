import '../index.css';
import '../app.css';
import Navbar from '../components/navbar';
import Footer from '../sections/footer';
import ScrollToTop from '../components/scrolltotop';

export const metadata = {
  title: 'Zeel Patel Portfolio',
  description: 'Computer Scientist passionate about building intelligent, impactful solutions and turning ideas into reality.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
