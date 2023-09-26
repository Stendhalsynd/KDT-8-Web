import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Header from "./Header";
import Header2 from "./Header2";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Redirect from "./Redirect";
import User from "./User";
import UserDetail from "./UserDetail";

import App from "./App";
import Error from "./Error";
import Comment from "./Comment";

import KDT from "./KDT";
import Codingon from "./Codingon";
import New from "./New";

// ver 1
export default function Router() {
  return (
    <div>
      {/* <BrowserRouter basename="/router"> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/student/kdt" element={<KDT />}></Route>
          <Route path="/student/codingon" element={<Codingon />}></Route>
          <Route path="/student/new" element={<New />}></Route>
          {/* <Route path="/about" element={<About />}></Route>
          <Route path="/redirect" element={<Redirect />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/user/:userid" element={<UserDetail />}></Route> */}
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// ver 2

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//         errorElement: <Error />,
//       },
//       // {
//       //   path: "about",
//       //   element: <About />,
//       // },
//       // {
//       //   path: "user/:userid",
//       //   element: <UserDetail />,
//       //   children: [
//       //     {
//       //       path: "comment",
//       //       element: <Comment />,
//       //     },
//       //   ],
//       // },
//     ],
//     errorElement: <NotFound />,
//   },
//   {},
//   // {
//   //   path: "/user",
//   //   element: <App />,
//   //   children: [
//   //     {
//   //       path: "",
//   //       element: <User />,
//   //     },
//   //     {
//   //       path: ":userid",
//   //       element: <UserDetail />,
//   //     },
//   //     {
//   //       path: "redirect",
//   //       element: <Redirect />,
//   //     },
//   //   ],
//   // },
// ]);

// export default Router;
