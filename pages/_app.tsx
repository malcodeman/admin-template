import type { AppProps } from "next/app";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";

import Header from "../components/Header";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Box as={"main"} paddingTop={"32"}>
        <Container maxW={"container.lg"}>
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
