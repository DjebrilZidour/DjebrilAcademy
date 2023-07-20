const Btn = (props) => {
  const { value, onClick, bg } = props;
  return (
    <button
      id="btn"
      className="text-white  font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 px-4"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Btn;
