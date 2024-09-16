import { useLocation } from "react-router";
import { fetchExDetail } from "../../../api/ex"
const ExPreview = ()=>{

const {state} = useLocation()
return(
    <>
      <div className="flex justify-end w-full">
        <h1 className="text-3xl uppercase background border-black border-2 px-2 py-5 cursor-pointer rounded-full "> AS</h1>
      </div>
    <section>
        <h1 className="text-5xl">HERES THE EXERCICE PREVIEW WELCOME</h1>
       
    </section>
    </>
)
}
export default ExPreview