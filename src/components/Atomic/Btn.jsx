const Btn = (props) => {
  const { value, onClick } = props;
  return (
    <button
      id="btn"
      className="text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 px-4"
      type="submit"
      onClick={() => {
        onClick();
      }}
    >
      {value}
    </button>
  );
};
export default Btn;
