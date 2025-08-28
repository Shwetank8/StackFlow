import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-10'>
      <SignUp />
    </div>
  )
}

export default SignUpPage
