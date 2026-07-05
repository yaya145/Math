function SearchForm () {
  return (
    <form className="search-container">
      <input 
        type="text" 
        placeholder="Что хотите найти?" 
        className="search-input" 
      />
      <button type="submit" className="search-button">
        Найти
      </button>
    </form>
  );
};

export default SearchForm; 

