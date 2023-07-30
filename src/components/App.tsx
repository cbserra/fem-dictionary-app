import Header from "./Header"
import Search from "./Search"
import Result from "./dictionary-result/Result"
import result from "../data/hello-definition.json"

function App() {
  return (
    <>
      <Header fonts={["Serif", "Sans Serif", "Mono"]} themes={["dark", "light"]} currentFont={"Serif"} currentTheme={"light"} />
      <Search searchInput={""} />
      <Result searchResponse={result}/>
    </>
  )
}

export default App
