import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Redirect from "./Redirect";
import User from "./User";
import UserDetail from "./UserDetail";

import App from "./App";
import Error from "./Error";
import Comment from "./Comment";

// ver 1
// export default function Router() {
//   return (
//     <div>
//       {/* <BrowserRouter basename="/router"> */}
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="/redirect" element={<Redirect />}></Route>
//           <Route path="/user" element={<User />}></Route>
//           <Route path="/user/:userid" element={<UserDetail />}></Route>
//           <Route path="/*" element={<NotFound />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// ver 2

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "user/:userid",
        element: <UserDetail />,
        children: [
          {
            path: "comment",
            element: <Comment />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "/user",
    element: <App />,
    children: [
      {
        path: "",
        element: <User />,
      },
      {
        path: ":userid",
        element: <UserDetail />,
      },
      {
        path: "redirect",
        element: <Redirect />,
      },
    ],
  },
]);

export default Router;
