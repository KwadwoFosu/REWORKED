import { useRouter, useSearchParams } from "next/navigation";
import { client } from "../../lib/client";
import { Product } from "../../components";
import Sidebar2 from "../../components/Sidebar2";

const SearchPage = ({ products }) => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;

  const encodedSearchQuery = encodeURI(searchQuery || "");

  return (
    <div className="mb-20">
    
      <div className="products-heading bg-zinc-900">
        <h2 className="font-sans">{searchQuery}</h2>
      </div>
      <div>
        {products.length > 0 ? (
          <div className="products-container mx-3 justify-center font-gen tracking-[2px]">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-[20px] justify-center">
            <p>No results found for "{searchQuery}" Please Try Again.</p>
          </div>

        )}
      </div>
      
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const searchQuery = context.query.q || "";
  const searchWords = searchQuery.split(" ");
  const query = `*[_type == "product" && (name match "${searchWords.join('')}*" || category match "${searchWords.join('')}*" || price == ${searchWords.join('')} || description match "${searchWords.join('')}*")]`;



  const products = await client.fetch(query);

  return {
    props: {
      products,
    },
  };
};

export default SearchPage;
