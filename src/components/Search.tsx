import { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios'
import { RefetchOptions } from 'axios-hooks'
import { ReactComponent as SearchIcon } from '@/Assets/images/icon-search.svg'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import React, { BaseSyntheticEvent, useCallback } from 'react'
import { FieldErrors } from 'react-hook-form/dist/types/errors'

type FormValues = {
  word: string
}

type Props = {
  // searchInput: string
  error: AxiosError<any, any> | null
  // word: string
  loading: boolean
  // setWord: (word: string) => void
  // handleSearch: (evt: React.FormEvent<HTMLFormElement>) => void
  wordInputRef: React.MutableRefObject<string>
  refetch: (
    config?: AxiosRequestConfig<any> | undefined,
    options?: RefetchOptions | undefined
  ) => AxiosPromise<any>
}

const Search = (props: Props): JSX.Element => {

  const {
    error: axiosError,
    // word,
    loading,
    // setWord,
    // handleSearch,
    wordInputRef,
    refetch
  } = props

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors, isDirty, isValid, isSubmitted }
  } = useForm<FormValues>({
    // mode: 'onSubmit',
    // reValidateMode: 'onChange'
  })

  const onSubmit: SubmitHandler<FormValues> = async (
    data: FormValues,
    evt?: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    evt?.preventDefault()

    console.log(`🚀 ~ wordInputRef.current`, wordInputRef.current)

    console.log(data)
    console.log(evt)
    // setWord(data.word)
    wordInputRef.current = data.word
    

    await refetch({ url: data.word || 'hello' })
      .then(console.info)
      .catch(console.error)
  }

  const onError: SubmitErrorHandler<FormValues> = async (
    errors: FieldErrors<FormValues>,
    evt?: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    evt?.preventDefault()

    console.log(`🚀 ~ wordInputRef.current`, wordInputRef.current)

    console.log(errors)
    console.log(evt)
  }

  const isApiError = useCallback(() => {
    const isAxiosError = axiosError?.isAxiosError ?? false

    console.log(`🚀 ~ isApiError ~ ?`, isAxiosError)

    return isAxiosError
  }, [axiosError])

  const isFormError = useCallback(() => {
    const isFormError = isSubmitted && !isValid && Object.keys(formErrors).length > 0

    console.log(`🚀 ~ isFormError ~ ?`, isFormError)

    return isFormError
  }, [formErrors, isSubmitted, isValid])

  const isFormOrApiError = () => isFormError() || isApiError()


  return (
    <div className='bg-gray-50 rounded-[1.6rem] w-full flex flex-col justify-center h-[4.8rem]'>
      <form 
        className='flex w-full justify-around'
        noValidate={true}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <input 
        {...register('word', { required: 'Whoops, can\'t be empty...' })}
          type="text" 
          value={wordInputRef.current} 
          className='bg-transparent w-3/4 text-inputS font-bold text-gray-800 focus-within:outline-none' 
          placeholder='Search for any word...'
          // ref={wordInputRef}
          onChange={(e) => wordInputRef.current = e.target.value}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  )
}

export default Search