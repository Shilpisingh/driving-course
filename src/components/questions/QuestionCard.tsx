import { CardContent, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import { Question } from "./question.types";

type Props = {
  question: Question;
  disabledOptions: boolean;
  isSubmit: boolean;
  error: boolean;
  getOptionColor: (option: string) => string;
  handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const QuestionCard: React.FC<Props> = ({
  question,
  disabledOptions,
  isSubmit,
  error,
  handleOptionChange,
  getOptionColor,
}) => (
  <CardContent>
    <Typography gutterBottom variant="h5" sx={{ fontWeight: 600 }}>
      {question.question}
    </Typography>
    <FormControl sx={{ m: 3, display: 'flex' }} variant="standard">
      <RadioGroup name="question" onChange={handleOptionChange}>
        {question.options.map(option => {
          const color = getOptionColor(option);
          return (<FormControlLabel
            key={option}
            value={option}
            control={
              <Radio 
                disabled={disabledOptions}
                sx={{ '&.Mui-disabled': {
                  color: 'inherit',
              }}}
              />}
            label={option}
            sx={{ color: isSubmit ? color : 'inherit' }}
          />)
        })}
      </RadioGroup>
    </FormControl>
    <Typography sx={{ color: 'red', textAlign: 'left' }}>{error && 'Please select one of these options'}</Typography>
  </CardContent>
)

export default QuestionCard;