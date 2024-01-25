import { useState } from 'react';

export interface QuizAnswer {
  answerText: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  questionText: string;
  answers: QuizAnswer[];
}

export function useQuiz(questions: QuizQuestion[]) {
  const [chosenAnswerIndices, setChosenAnswerIndices] = useState<number[]>([]);

  const chosenAnswers = chosenAnswerIndices.map(
    (answerIdx, questionIdx) => questions[questionIdx].answers[answerIdx]
  );

  const currentQuestionIndex = chosenAnswerIndices.length;
  const currentQuestion = questions[currentQuestionIndex];
  const score = chosenAnswers.reduce(
    (acc, answer) => acc + Number(answer.isCorrect),
    0
  );

  function onChooseAnswer(answerIdx: number) {
    setChosenAnswerIndices([...chosenAnswerIndices, answerIdx]);
  }

  return {
    isFinished: currentQuestionIndex >= questions.length,
    currentQuestionIndex,
    currentQuestion,
    onChooseAnswer,
    chosenAnswers,
    score,
  };
}
