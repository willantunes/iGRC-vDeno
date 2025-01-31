import { AppProps } from "$fresh/server.ts";
import I18nProvider from "../islands/i18n-provider.tsx";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>iGRC</title>
        <link rel="stylesheet" href="/styles.out.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body>
        <I18nProvider>
          <Component />
        </I18nProvider>
      </body>
    </html>
  );
}
