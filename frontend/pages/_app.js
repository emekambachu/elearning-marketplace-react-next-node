// Registered globally
import TopNav from "../components/TopNav";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min';
import "../public/css/styles.css";

function MyApp ({Component, pageProps}) {
    return (
      <>
          <TopNav></TopNav>
          <Component {...pageProps} />
      </>
    );
}

export default MyApp;