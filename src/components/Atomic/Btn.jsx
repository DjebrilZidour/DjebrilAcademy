const Btn = (props)=>{
    const { value, onClick } = props;
    return(
        <button
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
        type="submit"
        onClick={() => {
           onClick()
        }}
      >
        {value}
      </button>
    )
}
export default Btn