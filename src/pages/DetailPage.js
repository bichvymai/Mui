import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../jobs.json";

function DetailPage() {
  const params = useParams();
  return (
    <div>
      <h1>DetailPage {params.id} </h1>;
    </div>
  );
}

export default DetailPage;
