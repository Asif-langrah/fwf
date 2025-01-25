"use client"

import { useState } from "react"

interface WorkshopFormProps {
  onSubmit: (registrationNumber: string) => void
}

export default function WorkshopForm({ onSubmit }: WorkshopFormProps) {
  const [registrationNumber, setRegistrationNumber] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(registrationNumber)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="registrationNumber" className="block text-sm font-medium text-green-700">
          Registration Number
        </label>
        <input
          type="text"
          id="registrationNumber"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Check Workshop
      </button>
    </form>
  )
}

