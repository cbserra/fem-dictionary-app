import axios, { AxiosResponse } from 'axios'
import { DictionaryResponse } from '../types/DictionaryResponse.ts'

const API_ENDPOINT = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
axios.defaults.baseURL = API_ENDPOINT

const getWord = async (word: string): Promise<AxiosResponse<DictionaryResponse>> => {
  const response = axios.get<DictionaryResponse>(`/${word}`)
  console.log(`🚀 ~ getWord ~ response:`, response)
  return response
}

export default getWord