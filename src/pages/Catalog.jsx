import React from "react";

import { category as cate } from "../api/tmdbApi";

import { useParams } from "react-router";
import PageHeader from "../components/pageHeader/PageHeader";
import MovieGrid from "../components/movieGrid/MovieGrid";

const CataLog = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default CataLog;
