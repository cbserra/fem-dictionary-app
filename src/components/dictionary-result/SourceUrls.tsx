import { ReactComponent as NewWindowIcon } from '@/Assets/images/icon-new-window.svg'

type Props = {
  urls: string[]
}

const Source = (props: Props) => {
  const urls = props.urls
  return (
    <section>
      <p className='underline text-bodyXS text-gray-500'>Source(s)</p>
      { urls.map((url, index) => <p key={index} className='text-bodyXS text-gray-800 dark:text-white'>
        <a href={url} target='_blank' className='underline'>{url} <NewWindowIcon className='inline align-baseline stroke-gray-500' /></a></p>)}
    </section>
  )
}

export default Source