import TrimestreBox from "../../components/TrimestreBox";
import { useState } from "react";

const CourseEnglish = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">

      <TrimestreBox number="first"/>
      <TrimestreBox number="second"/>
      <TrimestreBox number="third"/>

    </section>
  );
};
export default CourseEnglish;
