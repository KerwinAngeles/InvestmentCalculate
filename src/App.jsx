import React from 'react'
import { Header } from './components/header'
import UserInput from './components/UserInput'

const App = () => {
  return (
    <main className='min-h-screen mx-auto py-20 bg-gradient-to-t gap-20 from-green-300 to-green-600'>
       <Header/>
       <UserInput/>
    </main>
  )
}

export default App