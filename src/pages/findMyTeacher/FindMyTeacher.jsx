const FindMyTeacher = ()=>{
    return (
        <div className="bg-gradient-to-b from-pink-100 to-white min-h-screen flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
            Trouvez le professeur parfait
          </h1>
          
          <div className="w-full max-w-2xl">
            <div className="flex items-center bg-white rounded-full shadow-md p-4">
              <span className="text-pink-500 pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20l-8-8h16l-8 8zM12 4v16"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder='Essayez "Échecs"'
                className="flex-grow outline-none px-4 py-2 text-gray-700"
              />
              <button className="bg-pink-500 text-white rounded-full px-6 py-2">
                Rechercher
              </button>
            </div>
          </div>
          
          <div className="flex overflow-x-auto gap-4 mt-8 bg-pink-100 rounded-full p-4 w-full max-w-3xl">
            <CategoryButton icon="📐" label="Maths" />
            <CategoryButton icon="🇬🇧" label="Anglais" />
            <CategoryButton icon="🇫🇷" label="Français" />
            <CategoryButton icon="🎹" label="Piano" />
            <CategoryButton icon="🏋️" label="Coach sportif" />
            <CategoryButton icon="🎓" label="Soutien scolaire" />
            <CategoryButton icon="🎤" label="Chant" />
            <CategoryButton icon="🏊" label="Natation" />
          </div>
        </div>
      );
    }
    
    function CategoryButton({ icon, label }) {
      return (
        <div className="flex flex-col items-center bg-white rounded-full shadow-md px-4 py-2">
          <span className="text-xl">{icon}</span>
          <span className="text-sm mt-2">{label}</span>
        </div>
      );
}
export default FindMyTeacher