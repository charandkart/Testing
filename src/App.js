import { Routes, Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import Article from "./Pages/Article";
import ArticleList from "./Pages/ArticleList";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <header>
        <div>
          <Link to="/">Home</Link>
          <Link to="/articles">Articles</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/articles" element={<ArticleList />} />
        <Route path="/article/:slug" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
