import { useFetchProducts } from "../hooks/useFetchProducts";

const DropdownOptions = ({ query }) => {
  const { data, loading, error, reset } = useFetchProducts(query);
  if (data.length === 0 && !loading && !error) return null;

  const handleSelect = (value) => () => {
    reset();
    console.log(value);
  };

  return (
    <div className="bg-white z-10 rounded-md p-2">
      {loading && <div className="option-text">Loading...</div>}
      {error && <div className="text-red-300">Error: {error}</div>}
      <div className="grid grid-cols-2 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center hover:bg-slate-100 cursor-pointer rounded-md"
            onClick={handleSelect(item)}
          >
            <img src={item.images[0]} alt={item.name} className="w-32 h-32" />
            <h1 className="option-text">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownOptions;
