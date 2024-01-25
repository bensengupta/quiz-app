interface QuestionProps {
  questionNumber: number;
  questionText: string;
  answers: string[];
  onChooseAnswer: (answerIdx: number) => void;
}

export function Question(props: QuestionProps) {
  return (
    <div>
      <h3>Question {props.questionNumber}</h3>

      <p>{props.questionText}</p>
      {props.answers.map((answer, index) => (
        <button key={index} onClick={() => props.onChooseAnswer(index)}>
          {answer}
        </button>
      ))}
    </div>
  );
}
