import { CiSearch } from "react-icons/ci";

export const Search = () => {

  function handleSearch(e) {
    e.preventDefault();
  }
  return (
    <form
      className="flex items-center justify-between flex-1 bg-gray-100 rounded-2xl "
      onSubmit={handleSearch}
    >
      <input
        placeholder="Search ..."
        className="bg-transparent px-2 py-1 outline-none "
        type="text"
        name="name"
      />
      <button type="submit">
        <CiSearch size={20} className="mr-4" />
      </button>
    </form>
  );
};
