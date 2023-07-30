import { ReactComponent as SearchIcon } from '@/Assets/images/icon-search.svg'

type Props = {
  searchInput: string
}

const Search = (props: Props) => {
  return (
    <div className='bg-gray-50 rounded-[1.6rem] w-full flex flex-col justify-center'>
      <form className='flex w-full justify-around'>
        <input type="text" value={props.searchInput} className='bg-transparent w-2/3' />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  )
}

export default Search