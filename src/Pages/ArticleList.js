import React from "react";
import { Link } from "react-router-dom";

const ArticleList = () => {
  return (
    <div>
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
