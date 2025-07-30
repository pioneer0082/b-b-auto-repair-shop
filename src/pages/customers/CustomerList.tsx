import { Link } from 'react-router-dom'
import { useAppSelector } from '../../redux'

function CustomerList() {
  const customers = useAppSelector((state) => state.customers.list)

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Customer List</h1>
      <div className="space-y-4">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="p-4 rounded shadow bg-white border border-gray-200"
          >
            <h2 className="text-lg font-semibold">{customer.name}</h2>
            <p className="text-sm text-gray-500">{customer.email}</p>
            <Link
              to={`/customer/${customer.id}`}
              className="inline-block mt-2 text-blue-600 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerList
