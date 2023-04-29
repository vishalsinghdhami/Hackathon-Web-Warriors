import "@/styles/globals.css";

import Layout from "@/components/Layout.jsx";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
