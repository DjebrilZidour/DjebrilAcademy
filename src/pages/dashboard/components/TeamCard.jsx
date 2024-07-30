const TeamCard = (props)=>{
    return(
        <div className="rounded-3xl h-92 w-64 border-2 flex flex-col justify-center items-center gap-4 py-8 px-4 mx-12 my-4">
            <img className="w-24 h-24 rounded-full" src="https://images.pexels.com/photos/8720598/pexels-photo-8720598.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            <h1 className="text-3xl text-center">{props.name}</h1>
            <p className="text-lg text-center">{props.description}</p>
        </div>
    )
}
export default TeamCard