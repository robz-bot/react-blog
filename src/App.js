import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Post from "./pages/create-post";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  localStorage.clear();
  const userSignOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <h3 className="text-light">React Blog</h3>
          <div className="align-navbar">
            <ul className=" me-auto mb-2 mb-lg-0 ">
              {isAuth && (
                <li className="nav-item m-2">
                  <Link to="/">Home</Link>
                </li>
              )}
              {isAuth && (
                <li className="nav-item m-2">
                  <Link to="/post">Create Post</Link>
                </li>
              )}
              {!isAuth ? (
                <li className="nav-item m-2">
                  <Link to="/login">Login</Link>
                </li>
              ) : (
                <li className="nav-item m-2">
                  <Link onClick={userSignOut}>Log Out</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home setIsAuth={setIsAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/post" element={<Post setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
