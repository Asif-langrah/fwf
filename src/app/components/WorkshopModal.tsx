"use client"

interface WorkshopModalProps {
  name: string
  workshop: string
  onClose: () => void
}

export default function WorkshopModal({ name, workshop, onClose }: WorkshopModalProps) {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-green-900">Workshop Information</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              Name: <span className="font-bold">{name}</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Workshop: <span className="font-bold">{workshop}</span>
            </p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

