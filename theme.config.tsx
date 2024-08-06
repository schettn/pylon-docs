import React from "react";
import { DocsThemeConfig, Link } from "nextra-theme-docs";

import Logo from "./components/logo";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/getcronit/pylon",
  },
  chat: {
    link: "https://discord.gg/gER3Ktde",
  },
  docsRepositoryBase: "https://github.com/schettn/pylon-docs",
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://cronit.io" target="_blank">
          cronit
        </a>
        . <Link href="/imprint">Imprint</Link>
      </span>
    ),
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Pylon",
      };
    }
  },
};

export default config;
