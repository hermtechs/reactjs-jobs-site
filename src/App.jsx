import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
} from "react-router-dom";
import HomePageScreen from "./components/pages/HomePageScreen";
import LayOuts from "./components/layouts/LayOuts";
import AllJobs from "./components/AllJobs";
import NotFoundPage from "./components/NotFoundPage";
import SingleJob, { jobLoader } from "./components/SingleJob";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOuts />}>
      <Route index element={<HomePageScreen />} />
      <Route path="jobs" element={<AllJobs />} />
      <Route path="job/:id" element={<SingleJob />} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
