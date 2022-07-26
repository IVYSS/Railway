import "../styles/globals.css";
import HomePageLayOut from "../layouts/Homepagelayout";

function MyApp({ Component, pageProps }) {
  return (
    <HomePageLayOut>
      <Component {...pageProps} />
    </HomePageLayOut>
  );
}

export default MyApp;
