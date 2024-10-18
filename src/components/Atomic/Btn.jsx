const Btn = (props) => {
  const { value, onClick } = props;

  if (typeof onClick === "string") {
    return (
      <button
        id="btn"
        className="text-white  font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 px-4"
      >
        <a target="_blank" href={onClick}>
          {value}
        </a>
      </button>
    );
  }
  return (
    <button
      className={
        " bg-[#36ca8f]  font-bold rounded shadow-lg hover:shadow-xl transition duration-200 px-4 py-2 " + props.customeClasses
      }
      onClick={onClick}
    >
      {value}
    </button>
  );
};
export default Btn;
