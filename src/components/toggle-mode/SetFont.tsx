import useTheme, { fontFaceOptions } from '../../hooks/useTheme';
import { useRef } from 'react';
import { ReactComponent as IconArrowDown } from '@/Assets/images/icon-arrow-down.svg'

const SetFont = () => {
  const { currentFontFace, setCurrentFontFace } = useTheme();
  const fontFaces = fontFaceOptions
  const fontFaceDialog = useRef<HTMLDialogElement>(null)

  return (
    <>
      <div className='font-select flex border-r-gray-400 border-r-[1px] pr-[1.6rem] gap-x-[1.6rem] justify-center items-center'>
        <div className={`current-font text-fontToggleS ${currentFontFace.class}`}>
          <button 
            className="show-font-options"
            onClick={() => fontFaceDialog.current?.showModal()}
          >
            {currentFontFace.name}
          </button>
        </div>
        <div className='icon-arrow'><IconArrowDown className='stroke-purple' /></div>
      </div>

      <dialog className="font-faces" id='font-options' ref={fontFaceDialog}>
        <ul>
          {fontFaces.map((fontFace, index) => (
            <li key={index}>
              <button onClick={() => setCurrentFontFace(fontFace)} className={`${fontFace.class}`}>{fontFace.name}</button>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  )
}

export default SetFont