const TestCard = (props)=>{
    const {exerciceTitle} = props
    return (
        <>
        <div className="rounded-lg w-36 bg-yellow-200 flex justify-center items-center">
            <h1> example {exerciceTitle}</h1>
        </div>
        </>
    )
}
export default TestCard