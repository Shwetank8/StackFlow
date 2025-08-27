import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-10'>
      <SignIn/>
    </div>
  )
}

export default SignInPage
