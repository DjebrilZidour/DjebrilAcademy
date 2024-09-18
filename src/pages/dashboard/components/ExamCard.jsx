const ExamCard = (props)=>{
    const {examTitle , exYear}= props
    return(
        <>
        <div onClick={()=>{}} className="rounded-lg w-36 bg-yellow-200 flex flex-col justify-center items-center cursor-pointer">
            <p>{exYear}</p>
            <h1 className="capitalize"> Examen {examTitle}</h1>
            
        </div>
        </>
    )
}
export default ExamCard