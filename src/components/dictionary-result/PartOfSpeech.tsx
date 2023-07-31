import HorizontalLine from "./HorizontalLine"

type Props = {
  partOfSpeech: string
}

const PartOfSpeech = (props: Props) => {
  const partOfSpeech = props.partOfSpeech
  return (
    <div className="part-of-speech--wrapper flex justify-center items-center gap-x-[2rem]">
      <h2 className='inline-flex'>{partOfSpeech}</h2>
      <HorizontalLine />
      {/* <div className="hor-line h-[.1rem] bg-gray-200 w-full"></div> */}
    </div>
  )
}

export default PartOfSpeech