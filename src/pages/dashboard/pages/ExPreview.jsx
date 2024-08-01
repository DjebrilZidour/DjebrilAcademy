import { useLocation } from "react-router";
const ExPreview = ()=>{
const {state} = useLocation()
return(
    <section>
        <h1 className="text-5xl">HERES THE EXERCICE PREVIEW WELCOME</h1>
        <h1>{state.moduleName}</h1>
    </section>
)
}
export default ExPreview