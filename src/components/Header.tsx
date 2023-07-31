import { ReactComponent as Logo } from '@/Assets/images/logo.svg'
import ToggleMode from './toggle-mode/ToggleMode'
import  useTheme  from '../hooks/useTheme'
import cx from 'classnames'
import SetFont from './toggle-mode/SetFont'


type Props = {
  fonts: string[]
  themes: string[]
  currentFont: string
  currentTheme: string
}

const Header = (props: Props) => {
  // const { currentFontFace, setCurrentFontFace } = useTheme();

  return (
    <header className='flex w-full items-center justify-center'>
      <div className='logo mr-auto'>
        <Logo className='w-[2.8rem] h-[3.2rem]' />
      </div>
      <div className='font-theme-select flex'>
        {/* <div className='current-font text-fontToggleS'>{props.currentFont}</div> */}
        <SetFont  />
        <ToggleMode />
      </div>
    </header>
  )
}

export default Header