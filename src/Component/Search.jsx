const Search = () => {
  return (
    <div className="flex justify-center mt-6 mb-6">
      <div className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="Type to search..."
          className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700">
          Search
        </button>
      </div>
    </div>
  );
};


export default Search