export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button id={option} onClick={onLeaveFeedback}>
      {option}
    </button>
  ));
}
