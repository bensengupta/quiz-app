import { useState } from 'react';

export interface QuizQuestion {
  questionText: string;
  correctAnswerIndex: number;
  choices: string[];
}

export function useQuiz(questions: QuizQuestion[]) {
  const [chosenAnswerIndices, setChosenAnswerIndices] = useState<number[]>([]);

  const chosenAnswers = chosenAnswerIndices.map(
    (answerIdx, questionIdx) => questions[questionIdx].choices[answerIdx]
  );

  const currentQuestionIndex = chosenAnswerIndices.length;
  const currentQuestion = questions[currentQuestionIndex];
  const score = chosenAnswerIndices.reduce((acc, answer, idx) => {
    return acc + Number(questions[idx].correctAnswerIndex === answer);
  }, 0);

  function chooseAnswer(answerIdx: number) {
    setChosenAnswerIndices([...chosenAnswerIndices, answerIdx]);
  }

  function reset() {
    setChosenAnswerIndices([]);
  }

  return {
    isFinished: currentQuestionIndex >= questions.length,
    currentQuestionIndex,
    currentQuestion,
    chosenAnswers,
    score,
    chooseAnswer,
    reset,
  };
}
