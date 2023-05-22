import Page1 from "@/components/Page1";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>'Vayan, valla'</title>
        <meta name="description" content="Portafolio personal de FernDev." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        />
      </Head>
      <Page1/>
    </>
  );
}
