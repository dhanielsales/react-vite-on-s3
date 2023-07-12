import { useLocation, useParams } from "react-router-dom";

export function Product() {
  const location = useLocation();
  const params = useParams();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Product</h1>
      <div>
        <p>Location: {JSON.stringify(location, null, 2)}</p>
      </div>
      <div>hash: {location.hash}</div>
      <div>key: {location.key}</div>
      <div>pathname: {location.pathname}</div>
      <div>search: {location.search}</div>
      <div>params.id: {params.id}</div>
    </>
  );
}
