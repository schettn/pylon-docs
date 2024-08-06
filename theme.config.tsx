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
    const image =
      config.frontMatter.image ||
      "https://private-user-images.githubusercontent.com/52858351/334735495-ec8aa54e-6b24-45cb-82a1-03b9c8b8f45f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjI5NDE4MDMsIm5iZiI6MTcyMjk0MTUwMywicGF0aCI6Ii81Mjg1ODM1MS8zMzQ3MzU0OTUtZWM4YWE1NGUtNmIyNC00NWNiLTgyYTEtMDNiOWM4YjhmNDVmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODA2VDEwNTE0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJjM2YzYjU1ZjdjNWYyOWVmNTQ0ODA4OGJlZDAzNTM4MzVlNTUyNTExOTUyNjU1YWY5OWRiZGI5N2YxNmJlZWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.m37Jq3XAA40EG5Dssxi9c_hGTlVzMHHzC17e348hGeo";
    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
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
