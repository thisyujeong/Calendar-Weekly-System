import '../styles/globals.css';
import App from 'next/app';
import type { AppProps } from 'next/app';
import { wrapper } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
