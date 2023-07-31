import { ReactComponent as PlayIcon } from '@/Assets/images/icon-play.svg'
import React from 'react'
import { Phonetic } from 'types/DictionaryResponse'

type Props = {
  word: string
  phonetics: Phonetic[]
  audio?: string
}

const findFirstAudioValue = (objs: Phonetic[]): string => objs.find(obj => obj.audio)?.audio || ''

const WordHeading = (props: Props) => {
  const word = props.word
  const phonetics = props.phonetics
  const audio = findFirstAudioValue(phonetics)
  const audioPlayerRef = React.createRef<HTMLAudioElement>()
  const playAudio = () => {
    audioPlayerRef.current?.play()
  }

  return (
    <section className='word-header flex justify-between items-center'>
      <div className='word-header__phonetic'>
        <h1>{word}</h1>
        {phonetics.map((phonetic, index) => {
          return (
            <p key={index} className='text-purple text-bodyM'>{phonetic.text}</p>
          )
        })}
      </div>
      { audio && 
      <div className='word-header__audio'>
        <audio src={audio} id='phonetic-audio' ref={audioPlayerRef}></audio>
        <button onClick={playAudio}>
          <PlayIcon className='w-[4.5rem] h-[4.5rem]' />
        </button>
      </div>
      }
    </section>
  )
}

export default WordHeading