import "./Search.css";

export default function Search() {
  return (
    <div className="search-bar">
      <input
        type="text"
        autoComplete="off"
        placeholder="Enter a city"
        className="search-input"
      />
      <button>Search</button>
    </div>
  );
}
