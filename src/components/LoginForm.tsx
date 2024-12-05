'use client'
import React from 'react'

const LoginForm = ({onSubmit}) => {
  return (
    <form className="space-y-4"
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }} >
      <h2 className="text-4xl font-extrabold text-secondary">Sign In</h2>
      <div>
        
        <input
          type="email"
          className="w-full border-2 border-black py-3 rounded-lg px-3"
          placeholder="Email Address*"
          required
        />
      </div>
      <div>
        <input
          type="password"
          className="w-full rounded-lg px-3 py-3 border-2 border-black mt-6 mb-10"
          placeholder="Password*"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-secondary text-lg font-light py-4 rounded-lg"
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm
