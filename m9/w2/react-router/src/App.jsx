import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Router from "./Router";

function App() {
  return (
    <>
      {/* ver 2 */}
      <Header />
      <Outlet />
      {/* ver 1 */}
      {/* <Router /> */}
    </>
  );
}

export default App;
