import React from "react";
import { Link } from "react-router-dom";
import Meta from "../Components/Meta";

const ArticleList = () => {
  return (
    <div>
      <Meta
        title="ArticleList page"
        description="ArticleList page Description"
      />
      <h1> This is Article List File</h1>
      {[1, 2, 3].map((i) => (
        <div>
          <Link to={`/article/${i}`}>Article - {i}</Link>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
