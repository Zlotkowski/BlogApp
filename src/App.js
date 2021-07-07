import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./ThemeContext";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoute from "./components/PrivateRoute";
import CreatePostPage from "./pages/CreatePostPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <Navbar />
        <div className="main">
          <Switch>
            <PrivateRoute
              path="/create"
              component={CreatePostPage}
            ></PrivateRoute>
            <PrivateRoute
              path="/profile"
              component={ProfilePage}
            ></PrivateRoute>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
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
