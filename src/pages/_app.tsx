import "@/styles/globals.css";
import '@/styles/banner.css';
import '@/styles/hotel-details.css';
import '@/styles/search-page.css';

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
