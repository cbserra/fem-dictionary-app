import { ReactComponent as PlayIcon } from '@/Assets/images/icon-play.svg'
import { Phonetic } from 'types/DictionaryResponse'

type Props = {
  word: string
  phonetics: Phonetic[]
  audio?: string
}

const WordHeading = (props: Props) => {
  return (
    <section className='word-header flex justify-between items-center'>
      <div className='word-header__phonetic'>
        <h1>{props.word}</h1>
        {props.phonetics.map((phonetic, index) => {
          return (
            <p key={index} className='text-purple text-bodyM'>{phonetic.text}</p>
          )
        })}
      </div>
      <div className='word-header__audio'>
        <PlayIcon className='w-[4.5rem] h-[4.5rem]' />
      </div>
    </section>
  )
}

export default WordHeading