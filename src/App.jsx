// import useFetch from "./Hooks/useFetch";

import useFetch from "./useFetch && useReducer/useFetch";

function App() {
  // !useFetch with useState
  // const { loading, data, error } = useFetch(
  //   "https://jsonplaceholder.typicode.com/users"
  // );

  // !useFetch with useReducer
  const { loading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <section className="mt-7">
      <div className="container">
        {loading && (
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-b-2 border-violet-900 rounded-full animate-spin mt-2"></div>
            <div className="mt-2 text-violet-800">loading</div>
          </div>
        )}
        {error && <p className="flex items-center justify-center">{error}</p>}
        {data && (
          <div className=" flex flex-col items-center justify-center">
            {data.map((user) => (
              <p className="">{user.name}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
