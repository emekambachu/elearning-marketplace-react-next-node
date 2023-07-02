// Registered globally
import TopNav from "../components/TopNav";

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min';
import "../public/css/styles.css";

// Packages
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// State Management
import {Provider} from "../context";

function MyApp ({Component, pageProps}) {
    return (
      <Provider>
          <ToastContainer position={"top-center"}></ToastContainer>
          <TopNav></TopNav>
          <Component {...pageProps} />
      </Provider>
    );
}

export default MyApp;