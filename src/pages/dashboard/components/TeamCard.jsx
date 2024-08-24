const TeamCard = (props)=>{
    return(
        <>
     
        <div className="rounded-3xl h-96 md:w-64 border-2 flex flex-col justify-center items-center gap-4 py-8 px-4 lg:mx-12 my-4 w-full">
            <img className="w-24 h-24 rounded-full" src={props.img} alt="" />
            <h1 className="text-3xl text-center">{props.name}</h1>
            <p className="text-lg text-center">{props.description}</p>
        </div>
        </>
    )
}
export default TeamCard