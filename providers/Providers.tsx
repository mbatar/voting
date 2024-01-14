"use client";

import theme from "@/styles/theme";
import GlobalStyles from "@/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { ApolloWrapper } from "@/lib/apolloProvider";
import StyledComponentsRegistry from "@/lib/registry";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <>
      <GlobalStyles />
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <ApolloWrapper>{props.children}</ApolloWrapper>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
};

export default Providers;
