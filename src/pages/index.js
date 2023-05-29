import Page1 from "@/components/Page1";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>'Vaya, Valla y Baya'</title>
        <meta
          name="description"
          content="Exposicion sobre 'Vaya', 'Valla' y 'Baya'"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Page1 />
    </>
  );
}
