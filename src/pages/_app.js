import '../styles/globals.css'
import '../styles/Hero.css'
import Theme from '../styles/theme';
import '../components/Technologies/Technologies.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
