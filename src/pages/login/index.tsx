export function Login() {
  return (
    <div>
      <div>
      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
        E-mail
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="email@email.com"
        />
      </div>
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
          senha
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="password"
            name="password"
            id="password"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
}
