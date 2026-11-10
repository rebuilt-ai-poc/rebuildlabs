"use client";

import { Theme } from "@astryxdesign/core/theme";
import { LinkProvider, LinkComponentType } from "@astryxdesign/core/Link";
import NextLink from "next/link";
import { themes, defaultThemeSlug } from "../astryx-themes";
import React from "react";

export function AstryxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Theme theme={themes[defaultThemeSlug]}>
      <LinkProvider component={NextLink as LinkComponentType}>
        {children}
      </LinkProvider>
    </Theme>
  );
}
