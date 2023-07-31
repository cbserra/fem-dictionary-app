import useAxios, { configure } from 'axios-hooks'
import LRU from 'lru-cache'
import Axios from 'axios'
// import { makeUseAxios } from 'axios-hooks'
import Header from "./Header"
import Search from "./Search"
import Result from "./dictionary-result/Result"
import result from "../data/hello-definition.json"
import React from 'react'
import {API_ENDPOINT} from '../api/FreeDictionaryApi'
import { DictionaryResponse } from 'types/DictionaryResponse'
import { useRef } from 'react';


const axios = Axios.create({
  baseURL: API_ENDPOINT 
})
const cache = new LRU({ max: 10 })
const defaultOptions = { manual: false }
configure({ axios, cache, defaultOptions })

function App() {
  // const [word, setWord] = React.useState('')
  const wordInputRef = useRef<string>('hello');
  // const dictionaryRef = useRef<DictionaryResponse>();
  const [{ data, loading, error }, refetch, response] = useAxios<DictionaryResponse>({ url: wordInputRef.current })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <>
      <Header 
        fonts={["Serif", "Sans Serif", "Mono"]} 
        themes={["dark", "light"]} 
        currentFont={"Serif"} 
        currentTheme={"light"} 
      />
      <Search 
        // searchInput={""} 
        error={error}
        // handleSearch={handleSearch}
        loading={loading}
        refetch={refetch}
        // setWord={setWord}
        // word={word}
        wordInputRef={wordInputRef}
      />
      <Result searchResponse={data || result}/>
    </>
  )
}

export default App
