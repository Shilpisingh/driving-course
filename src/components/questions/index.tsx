import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { data as questions } from './data';
import QuestionCard from "./QuestionCard";
import { AnswerObject, Color, Question } from "./question.types";

const Questions = () => {

    const [questionId, setQuestionId] = useState<number>(0);
    const [answer, setAnswer] = useState<string>('');
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [isTestFinished, setIsTestFinished] = useState<boolean>(false);
    const [score, setScore]= useState<number>(0);
    const question: Question = questions[questionId];
    const totalQuestions = questions.length || 0;
    const disabledOptions = isSubmit && userAnswers[questionId] ? true : false;

    console.log('isTestFinished', isTestFinished, questionId);
    const skipQuestion = () => {
      if (userAnswers.length < totalQuestions) {
        setQuestionId(prevId => prevId + 1);
      }
      setAnswer('');
      setIsSubmit(false);
    }

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedAnswer = event.currentTarget.value;
      setAnswer(selectedAnswer);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (answer) {
        const correct = question.answer === answer;
        const answerObject = {
          questionId,
          question: question.question,
          answer,
          correct,
          correctAnswer: question.answer,
        };
        setUserAnswers((prev) => [...prev, answerObject]);
        if (correct) setScore((prev) => prev + 1);
        setIsSubmit(true);
        setError(false);
        console.log(userAnswers, questions);
      } else {
        setError(true);
        return false;
      }
      
    };

    const handleFinishText = () => {
      if (questionId + 1 === totalQuestions) {
        setIsTestFinished(true);
      }
    }

    const getOptionColor = (option: string) : Color => {
      let color: Color = 'black';
      if (userAnswers[questionId]) {
          if (option === userAnswers[questionId].correctAnswer) {
            color = 'green'
          }
          if(option === userAnswers[questionId].answer && !userAnswers[questionId].correct) {
            color = 'red';
          }
      }
      return color;
    }

  return (
    <>
    { isTestFinished ? (<p>result : {score}</p>) : 
    <Grid container spacing={4} maxWidth={1100} margin="20px auto">
      <Grid item xs={4}>
        <Card>
          <Button variant="text">Score : {score}/{totalQuestions}</Button>
          <Button variant="text">Reset</Button>
        </Card>
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Progress
            </Typography>
            <Grid container>
              {
                Array.from({length: totalQuestions}, (x, i) => (
                  <Box
                    key={i}
                    sx={{
                      backgroundColor: (i === questionId) ? '#fff' : '#eee',
                      lineHeight: '18px',
                      width: '18px',
                      height: '18px',
                      p: 1,
                      m: 1,
                      borderRadius: 1,
                      border: (i === questionId) ? '1px solid rgba(25, 118, 210, 0.5)' : ''
                    }}
                    component="span">
                    {i+1}
                  </Box>
                ))
              }
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={8}>
        <Card>
          <form onSubmit={handleSubmit}>
          <QuestionCard
             question={question}
             disabledOptions = {disabledOptions}
             isSubmit = {isSubmit}
             error = {error}
             handleOptionChange={handleOptionChange}
             getOptionColor={getOptionColor}
            />
            <CardActions>
              { isSubmit && questionId + 1 === totalQuestions &&
                <Button
                  variant="contained"
                  size="small"
                  color="success"
                  onClick={handleFinishText}
                >Finised</Button>
              }
              {
                !(questionId + 1 === totalQuestions) && isSubmit && <Box
                onClick={skipQuestion}
                sx={{
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '26px',
                  minWidth: '64px',
                  padding: '3px 9px',
                  borderRadius: '4px',
                  border: '1px solid rgba(25, 118, 210, 0.5)',
                  color: '#1976d2',
                  cursor: 'pointer',
              }}
              >NEXT</Box>
              }
              {
                !isSubmit && <Button
                variant="contained"
                size="small"
                type="submit"
              >Submit</Button>
              }
            </CardActions>
          </form>
        </Card>
      </Grid>
    </Grid>
    }
    </>
  );
}

export default Questions;