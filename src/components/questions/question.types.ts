export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export type AnswerObject = {
  questionId: number;
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export type Color = 'black' | 'red' | 'green';