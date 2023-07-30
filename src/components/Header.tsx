import { ReactComponent as Logo } from '@/Assets/images/logo.svg'
import { ReactComponent as IconArrowDown } from '@/Assets/images/icon-arrow-down.svg'
import ToggleMode from './toggle-mode/ToggleMode'

type Props = {
  fonts: string[]
  themes: string[]
  currentFont: string
  currentTheme: string
}

const Header = (props: Props) => {
  return (
    <header className='flex w-full items-center justify-center'>
      <div className='logo mr-auto'>
        <Logo className='w-[2.8rem] h-[3.2rem]' />
      </div>
      <div className='font-theme-select flex'>
        <div className='font-select flex border-r-gray-400 border-r-[1px] pr-[1.6rem] gap-x-[1.6rem] justify-center items-center'>
          <div className='current-font'>{props.currentFont}</div>
          <div className='icon-arrow'><IconArrowDown /></div>
        </div>
        <ToggleMode />
      </div>
    </header>
  )
}

export default Header