import React from "react";
import "./Cards.css";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const Cards = ({ props: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading.....";
  }
  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} className="card infected">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              No. of Covid-19 active caseas
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} className="card recovered">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary"> Real DATE</Typography>
            <Typography variant="body2">
              No. of Covid-19 active caseas
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} className="card death">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary"> Real DATE</Typography>
            <Typography variant="body2">
              No. of Covid-19 active caseas
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
