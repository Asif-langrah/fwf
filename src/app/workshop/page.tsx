"use client"

import { useState } from "react"
import WorkshopForm from "../components/WorkshopForm";
import WorkshopModal from "../components/WorkshopModal";



export default function Workshop() {
  const [modalInfo, setModalInfo] = useState<{ name: string; workshop: string } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (registrationNumber: string) => {
    try {
      const response = await fetch("/api/workshop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ registrationNumber }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch workshop information")
      }

      const data = await response.json()
      setModalInfo(data)
      setError(null)
    } catch (error) {
      console.error("Error fetching workshop information:", error)
      setError("Failed to fetch workshop information. Please try again.")
      setModalInfo(null)
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-green-800">Workshop Information</h1>
      <p className="text-lg text-green-700">Enter your registration number to see which workshop you've attended.</p>
      <WorkshopForm onSubmit={handleSubmit} />
      {error && <p className="text-red-600">{error}</p>}
      {modalInfo && (
        <WorkshopModal name={modalInfo.name} workshop={modalInfo.workshop} onClose={() => setModalInfo(null)} />
      )}
    </div>
  )
}

