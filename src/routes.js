import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@Pages/home";
import Details from "@Pages/details";
import Search from "@Pages/search";

const RouterCustom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="details/:id" element={ <Details/> } />
        <Route path="search/:query" element={ <Search/> } />
      </Routes>
    </BrowserRouter>
  )
};

export default RouterCustom;
