import { Box, Button, Card, CardActions, CardContent, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";

const Questions = () => {
  return (
    <Grid container spacing={4} maxWidth={1100} margin="20px auto">
      <Grid item xs={4}>
        <Card>
          <Button variant="text">Back</Button>
          <Button variant="text">Reset</Button>
        </Card>
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Progress
            </Typography>
            <Grid container>
              {
                Array.from({length: 10}, (x, i) => (
                  <Box sx={{ backgroundColor: '#eee', lineHeight: '18px', width: '18px', height: '18px', p: 1, m: 1, borderRadius: 1  }} component="span">{i}</Box>
                ))
              }
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={8}>
        <Card sx={{ }}>
          <form>
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{ fontWeight: 600 }}>
                If you are found guilty of going the wrong way on a one-way road, ____ demerit points will be added to your driving record.
              </Typography>
              <FormControl sx={{ m: 3, display: 'flex' }} variant="standard">
                <RadioGroup name="quiz">
                  <FormControlLabel value="best" control={<Radio />} label="The best!" />
                  <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small">Submit</Button>
              <Button variant="outlined" size="small">Skip</Button>
            </CardActions>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Questions;