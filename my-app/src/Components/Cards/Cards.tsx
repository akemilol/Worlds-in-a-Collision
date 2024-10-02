export default function Cards() {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col md:flex-row md:space-x-8 w-[1200px] h-[700px] mx-auto">
          <div className="flex-1 text-white">
              <h1 className="text-3xl font-bold mb-4">Worlds in a Collision</h1>
              <p className="text-gray-300 mb-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
          </div>
          <div className="w-full md:w-1/2 bg-gray-400 rounded-lg h-full flex-shrink-0"></div>
      </div>
  </div>
  );
}

