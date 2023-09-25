import "./styles.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import TopProducts from "./components/TopProducts";
import Products from "./components/Products";
import About from "./components/About";
import Contacts from "./components/Contact";
import React from "react";
//import useFetch from "./hooks/useFetch";
//import { useDispatch } from "react-redux";
//import { saveUsers } from "./store/usersSlice";
//import { memo } from "react";

//const TopProducts = React.lazy(() => import("./components/TopProducts"));

export default App = () => {
  //const baseUrl = process.env.REACT_APP_BASE_URL;
  //const { data } = useFetch(`${baseUrl}/posts`, null);

  /* const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveUsers(["ds", "sd"]));
    console.log("Inside appjs");
  }, []);*/

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TopProducts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
};
