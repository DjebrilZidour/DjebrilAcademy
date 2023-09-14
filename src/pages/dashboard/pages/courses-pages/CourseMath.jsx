import TrimestreBox from "../../components/TrimestreBox";
import { useState } from "react";

const CourseMath = () => {
    const [isPopUpOppened , switchPopUpState] = useState(false)

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">

      <TrimestreBox number="first"  isPopUpOppened={isPopUpOppened} switchPopUpState={switchPopUpState}/>
      <TrimestreBox number="second" isPopUpOppened={isPopUpOppened} switchPopUpState={switchPopUpState}/>
      <TrimestreBox number="third"  isPopUpOppened={isPopUpOppened} switchPopUpState={switchPopUpState}/>

    </section>
  );
};
export default CourseMath;
