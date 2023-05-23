import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title>'Vaya, Valla y Baya'</title>
        <meta
          name="description"
          content="Exposicion sobre 'Vaya', 'Valla' y 'Baya'"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://cdn-icons-png.flaticon.com/128/3137/3137134.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
