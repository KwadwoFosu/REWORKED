import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineLoading } from "react-icons/ai";

const SearchInput = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(search ? search.get("q") : "");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSearch = async (event) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    setIsLoading(true);

    const encodedSearchQuery = encodeURI(searchQuery);
    await router.push(`/search?q=${encodedSearchQuery}`);

    setIsLoading(false);
  };

  return (
    <form onSubmit={onSearch} className="flex justify-center">
      <input
        value={searchQuery || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="w-full px-4 py-2 text-black-200 bg-white-200 border-[1px] border-zinc-700  rounded-tl-full rounded-bl-full focus:outline-none focus:ring-[1px] focus:ring-sky-500 placeholder:text-zinc-400"
        placeholder="Search"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="flex items-center bg-zinc-700 px-5 py-3 rounded-tr-full rounded-br-full"
      >
        {isLoading ? (
          <AiOutlineLoading className="animate-spin text-white" />
        ) : (
          <BiSearch size={20} className="text-white" />
        )}
      </button>
    </form>
  );
};

export default SearchInput;
