"use client";

import { ChunkLoadRecovery } from "@/components/ChunkLoadRecovery";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <ChunkLoadRecovery />
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </NextThemesProvider>
  );
}
