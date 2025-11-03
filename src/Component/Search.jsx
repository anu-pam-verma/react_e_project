const Search=()=>{
  return (
   <div className="search-container">
      {/*<h2>Search Something</h2>*/}
      <div className="search-box">
        <input
          type="text"
          placeholder="Type to search..."
        />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Search