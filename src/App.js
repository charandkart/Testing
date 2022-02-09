import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
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
        <Route path="/help" element={<Help />} />
        <Route path="/" element={<Home />} />

        <Route path="/article/:slug" element={<Article />} />
        <Route exact path="/articles" element={<ArticleList />} />
      </Routes>
    </>
  );
}

export default App;
