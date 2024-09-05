import React from "react";
import { DocsThemeConfig, Link, useConfig } from "nextra-theme-docs";

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
  head: function useHead() {
    const config = useConfig<{ description?: string; image?: string }>();
    const description =
      config.frontMatter.description ||
      "Pylon is a code-first GraphQL API development tool that generates GraphQL schemas from TypeScript definitions in real-time.";
    const image = config.frontMatter.image || "/images/logo.png";
    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />

        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@getcronit" />
        <meta name="twitter:image" content={image} />
        <meta name="og:title" content={`${config.title} – Pylon`} />
        <meta name="og:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="Pylon" />
      </>
    );
  },
};

export default config;
