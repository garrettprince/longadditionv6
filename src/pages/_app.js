import "../styles/globals.css";
import Layout from "/src/components/layout.js";
import { Analytics } from "@vercel/analytics/react";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout className={``}>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
