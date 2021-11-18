import { ThemeProvider } from 'next-themes';
import { IdProvider } from '@radix-ui/react-id';
import { darkTheme } from '../theme/stitches.config';
import { globalStyles } from '../theme/globals';

globalStyles();
function MyApp({ Component, pageProps }) {
  return (
    <IdProvider>

      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </IdProvider>
  );
}

export default MyApp;
