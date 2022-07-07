import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import jobs from "../jobs.json";
import JobCard from "../components/JobCard";
import PaginationControlled from "../components/PaginationControled";
import { useParams, useLocation } from "react-router-dom";
import { CloseFullscreen } from "@mui/icons-material";

function HomePage() {
  const location = useLocation();
  console.log(location);
  var params2a = new URLSearchParams(location.search);
  let paramGetq = params2a.get("q") || "";
  console.log(params2a.get("q"));
  return (
    <Container>
      <Grid container spacing={2} mt={2}>
        {jobs
          .filter((e) => {
            console.log(e.title);
            console.log(paramGetq);
            return e.title.toLowerCase().includes(paramGetq.toLowerCase());
          })
          .slice(0, 5)
          .map((job) => (
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
