import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const TemperatureConverter = () => {
  const [temp, setTemp] = useState({ c: 0, f: 0 });

  const celsiusTemp = (e) => {
    setTemp({
      c: e.target.value,
      f: e.target.value * (9 / 5) + 32,
    });
  };

  const fahrenheitTemp = (e) => {
    setTemp({
      c: (e.target.value - 32) * (5 / 9),
      f: e.target.value,
    });
  };

  return (
    <Card>
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="center"
              spacing={0.5}
            >
              <Grid item>
                <TextField
                  id="filled-basic"
                  label="Celsius"
                  variant="filled"
                  value={temp.c}
                  onChange={celsiusTemp}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="filled-basic"
                  label="Fahrenheit"
                  variant="filled"
                  value={temp.f}
                  onChange={fahrenheitTemp}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TemperatureConverter;
