import { globalStyles } from '../theme/globals';

globalStyles();
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
