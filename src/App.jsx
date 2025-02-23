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
import CreateJobs from "./components/CreateJobs";

const App = () => {
  // add new job
  const submitJobData = async (newJobdata) => {
    console.log(newJobdata);
    try {
      const response = await fetch("http://localhost:4000/jobposts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newJobdata),
      });
      if (!response.ok) {
        throw new Error("Failed to post job data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error posting job data:", error);
    }
  };

  //delete job
  const deleteJob = async (id) => {
    console.log(id);

    try {
      const response = await fetch(`http://localhost:4000/jobposts/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to delete job post");
      }

      // Optionally, you can process the response here
      console.log(`Job post with id ${id} was deleted successfully.`);
    } catch (error) {
      console.error("Error deleting job post:", error);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayOuts />}>
        <Route index element={<HomePageScreen />} />
        <Route path="jobs" element={<AllJobs />} />
        <Route
          path="job/:id"
          element={<SingleJob deleteCurrentJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="add-job"
          element={<CreateJobs submitData={submitJobData} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
