const About = () => {
    return (
      <div className="max-w-7xl mx-auto p-6">
        {/* Introduction Section */}
        <section className="text-center py-10">
          <h2 className="text-3xl font-bold text-gray-900">About Djebril Academy</h2>
          <p className="mt-4 text-lg text-gray-600">
            Djebril Academy is the first platform to help you solve your mathematics and physics
            problems. We focus on simplifying complex concepts and ensuring students achieve their
            highest potential.
          </p>
        </section>
  
        {/* Mission Section */}
        <section className="py-10">
          <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          <ul className="mt-4 space-y-2 text-lg text-gray-700">
            <li>✔ Understand all your lessons in one platform</li>
            <li>✔ Practice everything you've learned</li>
            <li>✔ Get the highest marks in your exams</li>
          </ul>
        </section>
  
        {/* CEO Section */}
        <section className="py-10 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800">Our CEO</h3>
          <p className="mt-4 italic text-xl text-gray-700">
            "To me, self-improvement is a journey that demands both intelligence and hard work, but above all, discipline.
            Without discipline, even the best intentions fall short."
          </p>
          <p className="mt-2 italic text-xl text-gray-700">
            "بالنسبة لي، تحسين الذات هو رحلة تتطلب الذكاء والعمل الجاد، ولكن الأهم من ذلك هو الانضباط. بدون الانضباط، حتى أفضل النوايا لا تحقق النجاح."
          </p>
          <p className="mt-6 text-lg font-bold text-gray-800">Zidour Djebril</p>
        </section>
  
        {/* Team Section */}
        <section className="py-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800">Prof1</h4>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi labore doloribus deleniti repudiandae.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800">Prof2</h4>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi labore doloribus deleniti repudiandae.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800">Prof3</h4>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi labore doloribus deleniti repudiandae.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default About;