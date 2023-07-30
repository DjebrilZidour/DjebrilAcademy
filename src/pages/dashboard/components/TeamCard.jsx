const TeamCard = (props)=>{
    return(
        <div className="rounded-3xl h-92 w-64 border-2 border-black flex flex-col justify-center items-center">
            <img className="w-24 h-24 rounded-full" src="https://images.pexels.com/photos/8720598/pexels-photo-8720598.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <h1 className="text-3xl">{props.name}</h1>
            <p >{props.description}</p>
        </div>
    )
}
export default TeamCard