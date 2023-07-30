import { ReactComponent as NewWindowIcon } from '@/Assets/images/icon-new-window.svg'

type Props = {
  source: string
}

const Source = (props: Props) => {
  const source = props.source
  return (
    <section>
      <p className='underline text-bodyXS'>Source</p>
      <p className='text-bodyXS'><a href={source} target='_blank'>{source} <NewWindowIcon /></a></p>
    </section>
  )
}

export default Source