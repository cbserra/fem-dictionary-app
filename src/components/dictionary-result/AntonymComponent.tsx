
type Props = {
  antonyms: string[]
}

const AntonymComponent = (props: Props) => {
  const antonyms = props.antonyms
  return (
    <h3 className=''>Antonyms <span>{antonyms.join(", ")}</span></h3>
  )
}

export default AntonymComponent