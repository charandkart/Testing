import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import Article from "./Pages/Article";
import ArticleList from "./Pages/ArticleList";
import Help from "./Pages/Help";
import Home from "./Pages/Home";
import Helmet from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Entertainment Hub</title>
        <meta
          name="description"
          content="Get info for all favorite movies and stories"
        />
        <meta name="keyword" content="Movies,Tv Series,Search Movies,News" />
      </Helmet>

      <div>
        <Link to="/articles">Articles</Link>
        <Link to="/help">Help</Link>
        <Link to="/home">Home</Link>

        <Routes>
          <Route exact path="/articles" element={<ArticleList />} />
          <Route path="/article/:slug" element={<Article />} />
          <Route path="/help" element={<Help />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
