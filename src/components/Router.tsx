import { createBrowserRouter } from "react-router-dom";
import Home from "./Home.tsx";
import FindDoctors from "./FindDoctors.tsx";

const Router = createBrowserRouter([
  {
    Component: Home,
    path: "/",
  },
  {
    Component:FindDoctors,
    path:'/doctors'
  }
]);
export default Router;
