import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/style.css";
import "./style/navbar.css";
import "./style/slideshow.css";

//Components
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import DetailProduk from "./pages/DetailProduk";

axios.defaults.baseURL = "http://localhost:5000/ayosakitdong/asia-east2/api";
// "https://asia-east2-interfest-backend.cloudfunctions.net/api";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/search" exact component={Search} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/detailProduk" exact component={DetailProduk} />
            <Route component={NotFound} />
            <Footer />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
