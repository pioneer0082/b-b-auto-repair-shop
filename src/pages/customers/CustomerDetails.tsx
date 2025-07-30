import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useAppSelector } from '../../redux/index'
import PostPaymentModal from './modal/PostPaymentModal'

const tabs = ['Overview', 'Payments', 'Arrangements', 'Appointments', 'Towing', 'Call Logs']

function CustomerDetails() {
  const { id } = useParams()
  const customer = useAppSelector((state) =>
    state.customers.list.find((c) => c.id === id)
  )
  const [activeTab, setActiveTab] = useState('Overview')
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  if (!customer) return <div className="p-8 text-red-600">Customer not found.</div>

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">{customer.name}</h1>
        <div>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Edit</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </div>

      <div className="border-b border-gray-200 mb-4">
        <nav className="-mb-px flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === tab
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="bg-white border p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">{activeTab}</h2>
        <p className="text-sm text-gray-600">This is mock content for the <strong>{activeTab}</strong> tab.</p>
      </div>

      {activeTab === 'Payments' && (
        <>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">💲 Payment History</h3>
            <button
              className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm"
              onClick={() => setShowPaymentModal(true)}
            >
              + Add New
            </button>
          </div>

          {/* Example payment item */}
          <div className="bg-white border rounded p-4 mb-2">
            <p className="text-green-600 font-bold text-lg">$250.00</p>
            <p className="text-sm text-gray-600">Date: 7/28/2025</p>
            <p className="text-sm text-gray-600">Method: Check</p>
            <p className="text-sm text-gray-600">Notes: PTP on 08/15/25</p>
          </div>

          {showPaymentModal && (
            <PostPaymentModal onClose={() => setShowPaymentModal(false)} />
          )}
        </>
      )}

    </div>
  )
}

export default CustomerDetails
