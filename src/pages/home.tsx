export function Home() {
  const person = {
    name: "batat",
    email: "quente",
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world! Updated 4</h1>
      <ul role="list" className="p-6 divide-y divide-slate-200">
        <li className="flex py-4 first:pt-0 last:pb-0">
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-slate-900">{person.name}</p>
            <p className="text-sm text-slate-500 truncate">{person.email}</p>
          </div>
        </li>
      </ul>
      <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
        Save changes
      </button>
    </>
  );
}
