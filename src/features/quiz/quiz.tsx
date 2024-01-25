import { QuizQuestion, useQuiz } from './use-quiz';

const QUIZ_QUESTIONS_CAPITALS: QuizQuestion[] = [
  {
    questionText: 'What is the capital of France?',
    answers: [
      { answerText: 'London', isCorrect: false },
      { answerText: 'Berlin', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Madrid', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Sweden?',
    answers: [
      { answerText: 'Stockholm', isCorrect: true },
      { answerText: 'Oslo', isCorrect: false },
      { answerText: 'Bucharest', isCorrect: false },
      { answerText: 'Istanbul', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Poland?',
    answers: [
      { answerText: 'Rome', isCorrect: false },
      { answerText: 'Kyiv', isCorrect: false },
      { answerText: 'Misk', isCorrect: false },
      { answerText: 'Warsaw', isCorrect: true },
    ],
  },
];

export function Quiz() {
  const {
    isFinished,
    score,
    currentQuestion,
    currentQuestionIndex,
    onChooseAnswer,
    chosenAnswers,
  } = useQuiz(QUIZ_QUESTIONS_CAPITALS);

  if (isFinished) {
    return (
      <div>
        <h1>Quiz Finished</h1>

        <h3>Final score: {score}</h3>

        {QUIZ_QUESTIONS_CAPITALS.map((question, index) => {
          const chosenAnswer = chosenAnswers[index];
          return (
            <div key={index}>
              <h3>{question.questionText}</h3>
              <p>You chose: {chosenAnswer.answerText}</p>

              {chosenAnswer.isCorrect ? (
                <p>Correct!</p>
              ) : (
                <p>
                  Incorrect. Correct answer:{' '}
                  {question.answers.find((ans) => ans.isCorrect)?.answerText}
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz</h1>

      <h3>Question {currentQuestionIndex + 1}</h3>

      <p>{currentQuestion.questionText}</p>
      {currentQuestion.answers.map((answer, index) => (
        <button key={index} onClick={() => onChooseAnswer(index)}>
          {answer.answerText}
        </button>
      ))}
    </div>
  );
}
