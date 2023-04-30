import '@/styles/globals.css';
import Sidebar from '../dhamiComponents/Sidebar';

export default function App({ Component, pageProps }) {
  return (
  //  <Sidebar>
      <Component {...pageProps} />
  //  </Sidebar>
  );
}
