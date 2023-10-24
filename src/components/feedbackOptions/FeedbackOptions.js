function FeedbackOptions(options, onLeaveFeedback) {
  return options.map(option => (
    <button onClick={onLeaveFeedback} id={option}>
      {option}
    </button>
  ));
}
