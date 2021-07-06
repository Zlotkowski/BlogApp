import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./ThemeContext";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar />
        <div className="main">
          <Switch>
            <Route path="/post/:postId">
              <PostPage />
            </Route>
            <Route path="/search/:query?">
              <HomePage />
            </Route>
            <Route path="/user/:userId">
              <HomePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
        <div className="footer">Awesome blog. All reghts reserved</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
