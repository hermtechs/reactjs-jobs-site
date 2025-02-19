import React from "react";
import JobListing from "./JobListing";
import { useState, useEffect } from "react";

const AllJobs = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchjobs = await fetch("http://localhost:4000/jobposts");
        const res = await fetchjobs.json();
        setJobs(res);
      } catch (error) {
        console.log("Failed to load data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          All Jobs
        </h2>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => {
              return <JobListing key={job.id} job={job} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllJobs;
