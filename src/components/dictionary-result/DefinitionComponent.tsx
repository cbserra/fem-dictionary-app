import { Definition } from 'types/DictionaryResponse'
import ExampleComponent from './ExampleComponent'
import SynonymsComponent from './SynonymsComponent'
import AntonymComponent from './AntonymComponent'

type Props = {
  definition: Definition 
}

const DefinitionComponent = (props: Props) => {
  const definition = props.definition
  return (
    <>
      <ul className='flex gap-y-[1.3rem] '>
        <li key={definition.definition} className='text-bodyS font-normal marker:text-purple list-disc list-inside'>
          <span>{definition.definition}</span>        
        </li>
      </ul>
      { definition.example && <ExampleComponent example={definition.example} /> }
      { definition.synonyms.length > 0 && <SynonymsComponent synonyms={definition.synonyms} /> }
      { definition.antonyms.length > 0 && <AntonymComponent antonyms={definition.antonyms} /> }
    </>
  )
}

export default DefinitionComponent