/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import BasicLayout from '../layouts/BaseLayout';

function MyApp({ Component, pageProps }) {
  return <BasicLayout><Component {...pageProps} /></BasicLayout>;
}

export default MyApp;
