import { Question } from './question';
import { QuestionResult } from './results';
import { QuizQuestion, useQuiz } from './use-quiz';

const QUIZ_QUESTIONS_CAPITALS: QuizQuestion[] = [
  {
    questionText: 'What is the capital of France?',
    correctAnswerIndex: 2,
    choices: ['London', 'Berlin', 'Paris', 'Madrid'],
  },
  {
    questionText: 'What is the capital of Sweden?',
    correctAnswerIndex: 0,
    choices: ['Stockholm', 'Oslo', 'Bucharest', 'Istanbul'],
  },
  {
    questionText: 'What is the capital of Poland?',
    correctAnswerIndex: 3,
    choices: ['Rome', 'Kyiv', 'Misk', 'Warsaw'],
  },
];

export function Quiz() {
  const {
    isFinished,
    score,
    currentQuestion,
    currentQuestionIndex,
    chosenAnswers,
    chooseAnswer,
    reset,
  } = useQuiz(QUIZ_QUESTIONS_CAPITALS);

  if (isFinished) {
    return (
      <div>
        <h1>Quiz Finished</h1>

        <h2>Final score: {score}</h2>

        {QUIZ_QUESTIONS_CAPITALS.map((question, index) => {
          return (
            <QuestionResult
              questionText={question.questionText}
              chosenAnswer={chosenAnswers[index]}
              correctAnswer={question.choices[question.correctAnswerIndex]}
            />
          );
        })}

        <button onClick={reset}>Restart quiz</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz</h1>

      <Question
        questionNumber={currentQuestionIndex + 1}
        questionText={currentQuestion.questionText}
        answers={currentQuestion.choices}
        onChooseAnswer={chooseAnswer}
      />
    </div>
  );
}
