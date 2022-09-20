import React from "react";
import ExploreGrid from "../components/explore/ExploreGrid";
import Search from "../components/explore/Search";
import Layout from "../components/shared/Layout";

function ExplorePage() {
  return (
    <Layout>
      <Search />
      <ExploreGrid />
    </Layout>
  );
}

export default ExplorePage;
