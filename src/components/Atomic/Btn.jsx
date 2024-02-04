const Btn = (props) => {
  const { value, onClick } = props;
  
  if (typeof onClick === "string") {
    return (
      <button
      id="btn"
      className="text-white  font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 px-4"
    >
      <a target="_blank" href={onClick}>{value}</a>
    </button>
    )
  }
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
