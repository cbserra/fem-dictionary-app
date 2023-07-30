import { DictionaryResponse } from 'types/DictionaryResponse'
import WordHeading from './WordHeading'
import MeaningBodies from './MeaningBodies'

type Props = {
  searchResponse: DictionaryResponse
}

  const Result = (props: Props) => {
    const response = props.searchResponse[0]
    return (
      <main className='w-full flex flex-col gap-y-[2.9rem]'>
        <WordHeading word={response.word} phonetics={response.phonetics} />
        <MeaningBodies response={response} />
      </main>
    )
}


export default Result