import Header from '@/components/header'; // Import the Header component
import Navbar from '@/components/navbar'; // Import the Navbar component
import '@/styles/globals.css';

console.log('Rendering global layout with Header and Navbar');
function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header and Navbar are included globally on every page */}
      <Header />
      <Navbar />
      
      {/* Render the page's component */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;