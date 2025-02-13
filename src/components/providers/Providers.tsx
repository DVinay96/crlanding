'use client';

import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}