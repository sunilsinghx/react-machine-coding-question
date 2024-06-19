
import useFetch from "./components/useFetch"

function App() {
  const {response , loading, error} = useFetch("https://jsonplaceholder.typicode.com/users")

    return (

      <div>

        {loading && <div> Loading....</div>}
        {response && response.map(data=> <div key={data.id}>{data.name}</div>) }
        {error && <div> {error.message}</div>}
      </div>

    )
}

export default App
