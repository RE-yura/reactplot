import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store";
import { useNavState } from "../redux/nav/useNavState";
import store from "../redux/store";
import BackDrop from "../components/atoms/global/BackDrop";
import SideMenu from "../components/organisms/global/SideMenu";
import FrontLayer from "../components/organisms/global/FrontLayer";
import { FrontViewType } from "../types";
import "../styles/globals.scss";
import "tailwindcss/tailwind.css";

const AppInit = () => {
  const { navState, setBackDrop, setShowSideMenu, setFrontViewType } = useNavState();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setShowSideMenu(false);
      setBackDrop({
        show: false,
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [setBackDrop, setShowSideMenu, router.events]);

  return (
    <>
      <SideMenu show={navState.showSideMenu} />
      {navState.backDrop.show && (
        <BackDrop
          isDark={navState.backDrop.isDark}
          onClick={() => {
            setBackDrop({ show: false });
            setShowSideMenu(false);
            setFrontViewType(FrontViewType.None);
          }}
        />
      )}
      {!!navState.frontViewType && (
        <FrontLayer
          frontViewType={navState.frontViewType}
          onClose={() => {
            setBackDrop({ show: false });
            setFrontViewType(FrontViewType.None);
          }}
        />
      )}
    </>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
        <AppInit />
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
