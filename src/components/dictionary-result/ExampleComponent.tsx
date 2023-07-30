
type Props = {
  example: string
}

const ExampleComponent = (props: Props) => {
  const example = props.example
  return (
    <p className="text-bodyS text-gray-500">"{example}"</p>
  )
}

export default ExampleComponent