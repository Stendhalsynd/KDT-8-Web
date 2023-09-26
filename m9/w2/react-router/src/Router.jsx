import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Redirect from "./Redirect";
import User from "./User";
import UserDetail from "./UserDetail";

export default function Router() {
  return (
    <div>
      {/* <BrowserRouter basename="/router"> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/redirect" element={<Redirect />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/user/:userid" element={<UserDetail />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
