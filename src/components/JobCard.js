import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";
import { display, flexbox } from "@mui/system";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: "18rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {job.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.skills.slice(0, 4).join("-")}
        </Typography>
        <Typography variant="body2">{job.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(`/job/${job.id}`)}
          size="small"
          variant="contained"
          color="success"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
