import css from './Statistics.module.css';

export default function Statistics({ good, neutral, bad, total, positive }) {
  return (
    <ul className={css.list}>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total:{total}</li>
      <li>Positive feedback:{positive}</li>
    </ul>
  );
}
