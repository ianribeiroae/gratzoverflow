import Head from "next/head";
import { Container, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useState } from "react";
import { MainAppShell } from "layout/MainAppShell";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("python", python);

export default function App(props) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            colors: {
              ae: [
                "#FEF0E6",
                "#FCD5BA",
                "#FBB98E",
                "#F99E62",
                "#F88335",
                "#F66809",
                "#C55307",
                "#943E05",
                "#622904",
                "#311502",
              ],
            },
            primaryColor: "grape",
          }}
        >
          <MainAppShell>
            <Container fluid>
              <Component {...pageProps} />
            </Container>
          </MainAppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
