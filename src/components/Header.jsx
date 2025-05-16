import React from 'react'

export const Header = () => {
    return (
        <header className='flex flex-col justify-center items-center gap-10 py-10'>
            <img src="/invesment.svg" alt="invesment image" className='w-56 h-auto' />
            <h1 className='text-4xl text-center font-bold bg-gradient-to-t from-slate-200 to-slate-50 bg-clip-text text-transparent'>INVESMENT CALCULATOR</h1>
        </header>
    )
}
