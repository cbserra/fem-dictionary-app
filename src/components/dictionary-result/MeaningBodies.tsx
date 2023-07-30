import { Dictionary, Meaning } from '../../types/DictionaryResponse.ts'
import MeaningBody from './MeaningBody'

type Props = {
  response: Dictionary
}

const MeaningBodies = (props: Props) => {
  const response = props.response
  return (
    <section className='flex flex-col gap-y-[3.2rem]'> 
      {response.meanings.map((meaning: Meaning) => {
        return <MeaningBody word={response.word} meaning={meaning} />
      })}
    </section>
  )
}

export default MeaningBodies