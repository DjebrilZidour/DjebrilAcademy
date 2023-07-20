const Btn = (props) => {
  const { value, onClick } = props;
  return (
    <button
      id="btn"
      className="text-white w-full font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 px-4"
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Btn;
