"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyles from "@/styles/GlobalStyles";
import { AppContextProvider } from "@/context/appContext";
import { ApolloWrapper } from "@/lib/apolloProvider";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <>
      <GlobalStyles />
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <AppContextProvider>
            <ApolloWrapper>{props.children}</ApolloWrapper>
          </AppContextProvider>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
};

export default Providers;
