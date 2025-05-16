import React from 'react'

export const Input = ({children, placeHolder, name, defaultValue, handledChange}) => {
  return (
    <section>
        <label name={name} className='block mb-2 text-md font-medium text-gray-900 dark:text-white ' >{children}</label>
        <input value={defaultValue} type="number" placeholder={placeHolder} onChange={handledChange} className='bg-gray-50 border border-gray-300 
         text-gray-900 text-md rounded-lg p-2' />
    </section>
  )
}
