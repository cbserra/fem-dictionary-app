
type Props = {
  synonyms: string[]
}

const SynonymsComponent = (props: Props) => {
  const synonyms = props.synonyms
  return (
    <h3 className=''>Synonyms <span className="syn-ant-list">{synonyms.join(", ")}</span></h3>
  )
}

export default SynonymsComponent