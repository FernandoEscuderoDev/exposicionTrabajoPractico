import Page1 from "@/components/Page1";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>'Vayan, valla'</title>
        <meta name="description" content="Portafolio personal de FernDev." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Page1/>
    </>
  );
}
