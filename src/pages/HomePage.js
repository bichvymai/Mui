import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import jobs from "../jobs.json";
import JobCard from "../components/JobCard";
import PaginationControlled from "../components/PaginationControled";

function HomePage() {
  return (
    <Container>
      <Grid container spacing={2} mt={2}>
        {jobs.slice(0, 5).map((job) => (
          <Grid key={job.id} item xs={12} md={4} lg={3}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
      <PaginationControlled />
    </Container>
  );
}

export default HomePage;
