export  const TrimestrePopUp = (props)=>{

    return(
        <section className="w-full" style={{display: props.isPopUpOppened ? "flex": "none"}}>
            <p>welcome on your first course</p>
        </section>
    )
}
const TrimestreBox = (props)=>{

return(
    <>
    <div className="flex items-center justify-between border-2 border-gray rounded-3xl w-full px-16 py-2 shadow-lg ">
        <h1 className="text-3xl capitalize">{props.number} semester</h1>
        <img onClick={()=>{
            if(props.isPopUpOppened){
                props.switchPopUpState(false)
                
            }else{
                props.switchPopUpState(true)
            }
            
        }} className=" cursor-pointer w-8" src="https://cdn-icons-png.flaticon.com/128/2985/2985161.png" alt="" />
    </div>
                <TrimestrePopUp isPopUpOppened={props.isPopUpOppened} switchPopUpState={props.switchPopUpState}/>
    </>
)
}
export default TrimestreBox;

// https://cdn-icons-png.flaticon.com/128/130/130906.png // up arrow after the click




// https://cdn-icons-png.flaticon.com/128/2985/2985150.png //down arrow