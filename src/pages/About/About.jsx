import Navbar from "../../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        {/* Hero Section */}
        <section className="bg-green-700 text-white text-center py-16">
          <h1 className="text-4xl font-extrabold">About Djebril Academy</h1>
          <p className="mt-4 text-xl">
            Leading the way in solving your mathematics and physics problems with innovative learning methods.
          </p>
        </section>

        {/* Mission Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6 text-center">
              At Djebril Academy, our mission is to provide comprehensive support to students in mastering
              complex concepts in mathematics and physics.
            </p>
            <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside">
              <li>✔ Help you understand your lessons through an all-in-one platform.</li>
              <li>✔ Practice through structured exercises and real-life examples.</li>
              <li>✔ Achieve your best results in exams and tests.</li>
            </ul>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-12 bg-green-100 rounded-md shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-green-800 text-center mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 text-center">
              We envision a future where every student, regardless of their background, can excel in mathematics and physics through
              innovative and accessible learning tools.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-green-50 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-800">Excellence</h3>
                <p className="mt-4 text-gray-600">
                  We strive to deliver top-quality education to help students succeed in their academic journeys.
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-800">Innovation</h3>
                <p className="mt-4 text-gray-600">
                  By integrating technology with education, we provide dynamic learning solutions.
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-800">Commitment</h3>
                <p className="mt-4 text-gray-600">
                  We are committed to ensuring every student has the resources needed for success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Section */}
        <section className="py-12 bg-green-700 text-white text-center">
          <h2 className="text-3xl font-semibold mb-6">Message from Our CEO</h2>
          <p className="text-lg italic">
            "To me, self-improvement is a journey that demands both intelligence and hard work, but above all, discipline. 
            Without discipline, even the best intentions fall short."
          </p>
          <p className="mt-4 text-lg italic">
            "بالنسبة لي، تحسين الذات هو رحلة تتطلب الذكاء والعمل الجاد، ولكن الأهم من ذلك هو الانضباط. بدون الانضباط، حتى أفضل النوايا لا تحقق النجاح."
          </p>
          <p className="mt-6 text-xl font-bold">Zidour Djebril</p>
        </section>

        {/* History Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Our History</h2>
            <p className="text-lg text-gray-600 text-center">
              Founded in 2023, Djebril Academy started with a passion for teaching and helping students succeed in subjects 
              often perceived as challenging. Today, our platform is recognized for making learning more accessible and engaging.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Team Member 1 */}
              <div className="p-6 bg-green-50 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-green-800">Prof1</h4>
                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor  consectetur adipisicing elit. Quasi labore doloribus deleniti repudiandae.
                </p>
              </div>
              {/* Team Member 2 */}
              <div className="p-6 bg-green-50 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-green-800">Prof2</h4>
                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor  consectetur adipisicing elit. Quasi labore doloribus deleniti repudiandae.
                </p>
              </div>
              {/* Team Member 3 */}
              <div className="p-6 bg-green-50 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-green-800">Prof3</h4>
                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor  consectetur adipisicing elit. Quasi labore doloribus deleniti repudiandae.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
