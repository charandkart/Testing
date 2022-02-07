import { Routes, Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import Article from "./Pages/Article";
import ArticleList from "./Pages/ArticleList";
import Help from "./Pages/Help";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <header>
        <div>
          <Link to="/articles">Articles</Link>
          <Link to="/help">Help</Link>
          <Link to="/">Home</Link>
        </div>
      </header>
      <Routes>
        <Route exact path="/articles" element={<ArticleList />} />
        <Route path="/article/:slug" element={<Article />} />
        <Route path="/help" element={<Help />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
