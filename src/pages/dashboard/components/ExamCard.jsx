const ExamCard = (props)=>{
    const {examTitle}= props
    return(
        <>
        <div className="rounded-lg w-36 bg-yellow-200 flex justify-center items-center">
            <h1> exam {examTitle}</h1>
        </div>
        </>
    )
}
export default ExamCard