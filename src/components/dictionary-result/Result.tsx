import { DictionaryResponse } from 'types/DictionaryResponse'
import WordHeading from './WordHeading'
import MeaningBodies from './MeaningBodies'
import HorizontalLine from './HorizontalLine'
import SourceUrls from './SourceUrls'

type Props = {
  searchResponse: DictionaryResponse
}

  const Result = (props: Props) => {
    const response = props.searchResponse[0]
    return (
      <main className='w-full flex flex-col gap-y-[2.9rem]'>
        <WordHeading word={response.word} phonetics={response.phonetics} />
        <MeaningBodies response={response} />
        <HorizontalLine />
        <SourceUrls urls={response.sourceUrls} />
      </main>
    )
}


export default Result