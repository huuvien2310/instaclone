import React from "react";
import { useLayoutStyles } from "./styles/useLayoutStyles";
import SEO from "../shared/Seo";
import Navbar from "./Navbar";

function Layout({
  children,
  minimalNavbar = false,
  title,
  marginTop = 60,
}: any) {
  const classes = useLayoutStyles();

  return (
    <section className={classes.section}>
      <SEO title={title} />
      <Navbar minimalNavbar={minimalNavbar} />
      <main className={classes.main} style={{ marginTop }}>
        <section className={classes.childrenWrapper}>
          <div className={classes.children}>{children}</div>
        </section>
      </main>
    </section>
  );
}

export default Layout;
