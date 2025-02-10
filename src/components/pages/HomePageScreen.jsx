import Hero from "../Hero";
import HomeCards from "../HomeCards";
import JobListings from "../JobListings";
import ViewAllJobs from "../ViewAllJobs";
const App = () => {
  return (
    <>
      <Hero
        title="Become a React Dev "
        subtitle="Find the React job that fits your skills and needs"
      />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default App;
