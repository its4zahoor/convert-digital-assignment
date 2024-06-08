import { useFetchProducts } from "../hooks/useFetchProducts";

const DropdownOptions = ({ query, onSelect }) => {
  const { data, loading, error, reset } = useFetchProducts(query);
  if (data.length === 0 && !loading && !error) return null;

  const handleSelect = (value) => () => {
    reset();
    onSelect(value);
  };

  return (
    <div className="bg-white z-10 rounded-md p-2" data-testid="options-list">
      {loading && <div className="option-text">Loading...</div>}
      {error && <div className="text-red-300">Error: {error}</div>}
      <div className="grid grid-cols-2 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex items-center hover:bg-slate-100 cursor-pointer rounded-md"
            onClick={handleSelect(item)}
          >
            <img src={item.images[0]} alt={item.name} className="w-24 h-24" />
            <div className="flex flex-col p-2">
              <h1 className="option-text">{item.title}</h1>
              <h3 className="text-left font-medium text-gray-500">
                $ {item.price}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownOptions;
