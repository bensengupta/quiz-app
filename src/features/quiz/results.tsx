interface QuestionResultProps {
  questionText: string;
  chosenAnswer: string;
  correctAnswer: string;
}

export function QuestionResult(props: QuestionResultProps) {
  return (
    <div>
      <h3>{props.questionText}</h3>
      <p>You chose: {props.chosenAnswer}</p>

      {props.chosenAnswer === props.correctAnswer ? (
        <p>✅ Correct!</p>
      ) : (
        <p>❌ Incorrect. Correct answer: {props.correctAnswer}</p>
      )}
    </div>
  );
}
