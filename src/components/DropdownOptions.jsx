import { useFetchProducts } from "../hooks/useFetchProducts";

const DropdownOptions = ({ query }) => {
  const { data, loading, error } = useFetchProducts(query);

  if (data.length === 0) return null;

  return (
    <div className="bg-white z-10 grid grid-cols-2">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex items-center hover:bg-slate-100 cursor-pointer"
        >
          <img src={item.images[0]} alt={item.name} className="w-32 h-32" />
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default DropdownOptions;
