import { Meaning } from '../../types/DictionaryResponse.ts'
import AntonymComponent from './AntonymComponent.tsx'
import DefinitionComponent from './DefinitionComponent.tsx'
import PartOfSpeech from './PartOfSpeech.tsx'
import SynonymsComponent from './SynonymsComponent.tsx'

type Props = {
  word: string
  meaning: Meaning
}

const MeaningBody = (props: Props) => {
  const meaning = props.meaning
  const synonyms = meaning.synonyms
  const antonyms = meaning.antonyms
  return (
    <section key={props.word}>
      { meaning && 
        <div className='flex gap-y-[1.6rem] flex-col' key={meaning.partOfSpeech}>
          <PartOfSpeech partOfSpeech={meaning.partOfSpeech} />
          <h3 className=''>Meaning</h3>
          { meaning.definitions.map((definition) => {
              return (
                <DefinitionComponent definition={definition} />
              )
            })
          }
        </div>
      }
      { synonyms.length > 0 && <SynonymsComponent synonyms={synonyms} /> }
      { antonyms.length > 0 && <AntonymComponent antonyms={antonyms} /> }
    </section>
  )
}

export default MeaningBody