import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button className={css.button} id={option} onClick={onLeaveFeedback}>
      {option}
    </button>
  ));
}
