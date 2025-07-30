import { useParams } from 'react-router-dom'
import { useState } from 'react'

const TABS = ['Overview', 'Payments', 'Arrangements', 'Appointments', 'Towing', 'Call Logs']

export default function CustomerDetail() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Jane Doe</h1>
          <p className="text-sm text-gray-500">User ID: {id}</p>
        </div>
        <div>
          <button className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded mr-2">Edit</button>
          <button className="bg-red-500 text-white font-semibold px-4 py-2 rounded">Delete</button>
        </div>
      </div>

      <div className="flex space-x-6 border-b mb-4">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium ${
              activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-semibold">{activeTab}</h2>
        <p className="text-gray-600 mt-2">This is the {activeTab} content section.</p>
      </div>
    </div>
  )
}
