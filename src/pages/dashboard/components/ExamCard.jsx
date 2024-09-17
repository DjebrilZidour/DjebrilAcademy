const ExamCard = (props)=>{
    const {examTitle , exYear}= props
    return(
        <>
        <div onClick={()=>{}} className="rounded-lg w-36 bg-yellow-200 flex justify-center items-center cursor-pointer">
            <h1 className="capitalize"> Examen {examTitle}</h1>
            <p>{}</p>
        </div>
        </>
    )
}
export default ExamCard