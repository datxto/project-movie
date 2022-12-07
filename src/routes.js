import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "@Pages/home";
import Details from "@Pages/details";

const RouterCustom = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="details/:id" element={ <Details/> } />
      </Routes>
    </BrowserRouter>
  )
};

export default RouterCustom;
