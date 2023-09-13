const TrimestreBox = (props)=>{
return(
    <div className="flex items-center justify-between border-2 border-gray rounded-3xl w-full px-16 py-2 shadow-lg ">
        <h1 className="text-3xl capitalize">{props.number} semester</h1>
        <img className=" cursor-pointer w-8" src="https://cdn-icons-png.flaticon.com/128/2985/2985161.png" alt="" />
    </div>
)
}
export default TrimestreBox;

// https://cdn-icons-png.flaticon.com/128/130/130906.png // up arrow after the click




// https://cdn-icons-png.flaticon.com/128/2985/2985150.png //down arrow