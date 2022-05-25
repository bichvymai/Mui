import React from "react";
import JobCard from "./components/JobCard";
import SearchAppBar from "./components/SearchAppBar";
import jobs from "./jobs.json";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div>
      <SearchAppBar />
      <Grid container spacing={2} mt={2}>
        {jobs.slice(0, 5).map((job) => (
          <Grid key={job.id} item xs={12} md={4} lg={3}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
