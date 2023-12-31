import { ReactComponent as IconMoon } from '@/Assets/images/icon-moon.svg'

import  useTheme  from '../../hooks/useTheme'
import cx from 'classnames'

const ToggleMode = () => {
  const { darkMode, toggleDarkMode } = useTheme()

  return (
    <div className={'light-dark-toggle flex items-center justify-center pl-[1.6rem]'}>
      <label className="light-dark-toggle-label flex cursor-pointer items-center justify-center">
   
        <div
          className={'buttons relative mx-2 inline-block h-[2.0rem] w-[3.6rem] rounded-[14.5px] bg-neutral-600 dark:bg-purple'}
        >
          <input
            type="checkbox"
            name="dark-mode"
            id={'dark-mode'}
            className={cx(
              'peer absolute h-full w-full cursor-pointer appearance-none',
              'before:absolute before:top-[50%] before:h-[70%] before:w-[85%]', 
              'before:translate-x-[47px] before:-translate-y-1/2 before:rounded-[50%]',
              'after:absolute after:top-[50%] after:h-[15px] after:w-[15px] after:translate-x-[.25rem]', 
              'after:-translate-y-1/2 after:rounded-[50%] after:bg-neutral-100',
              'after:transition-transform after:duration-200 after:ease-in-out',
              'checked:after:translate-x-[1.9rem] checked:after:-translate-y-1/2'
            )}
            onChange={() => toggleDarkMode(!darkMode)}
            checked={darkMode}
          />
        </div>
        <span
          className={cx(
            // darkMode ? 'text-neutral-600' : 'text-neutral-100',
            'transition-colors duration-200 ease-in-out'
          )}
        >
          <IconMoon className={'h-8 w-8 fill-gray-500 stroke-gray-500 dark:stroke-purple'} />
        </span>
      </label>
    </div>
  )
}

export default ToggleMode
