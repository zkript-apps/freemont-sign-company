import "../styles/globals.css";
import MainNavigation from "@/components/MainNavigation";
import Content from "@/components/pages/404/Content";
import MainFooter from "@/components/Footer";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found - Fremont Sign Company</title>
        <link rel="icon" type="image/x-icon" href={`/fav.png`} />
      </Head>
      <MainNavigation />
      <div className="pt-16 md:pt-28">
        <Content />
      </div>
      <MainFooter />
    </>
  );
}
