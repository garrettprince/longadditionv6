import "../styles/globals.css";
import Layout from "/src/components/layout.js";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout className={``}>
      <Component {...pageProps} />
    </Layout>
  );
}
