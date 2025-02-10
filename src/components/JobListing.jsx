import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(true);

  let shortDescription = job.description.substring(0, 90);

  if (showFullDescription) {
    var jobDescription = shortDescription;
  } else {
    var jobDescription = job.description;
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">Full-Time</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{}</div>

        <h3 className="text-indigo-500 mb-2">{job.salary}/ Year</h3>

        <div className="border border-gray-100 mb-5">
          {jobDescription}
          <button
            onClick={() => setShowFullDescription((prevState) => !prevState)}
            className="bg-indigo-100 ml-1 text-dark font-light py-0.02 px-2 rounded-sm"
          >
            {showFullDescription ? " More..." : "Less"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="mr-1 inline" />
            {job.location}
          </div>
          <NavLink
            to={`/job/${job}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
