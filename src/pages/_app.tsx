import { type AppType } from "next/dist/shared/lib/utils";
import { appWithI18Next, useSyncLanguage } from "ni18n";
import { ni18nConfig } from "ni18n.config";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  let locale;
  if (typeof window !== "undefined") {
    locale = window?.localStorage.getItem("MY_LANGUAGE");
  }
  useSyncLanguage(locale ?? "defaultLocale");

  return <Component {...pageProps} />;
};

export default appWithI18Next(MyApp, ni18nConfig);
