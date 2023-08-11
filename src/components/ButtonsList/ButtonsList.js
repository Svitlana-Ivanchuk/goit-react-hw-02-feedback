export const ButtonsList = ({ onClick }) => {
  return (
    <>
      <li>
        <button type="button" onClick={onClick}>
          Good
        </button>
      </li>
      <li>
        <button type="button" onClick={onClick}>
          Neutral
        </button>
      </li>
      <li>
        <button type="button" onClick={onClick}>
          Bad
        </button>
      </li>
    </>
  );
};
