import { Route, Routes, Navigate } from 'react-router-dom'
import CustomerList from './pages/customers/CustomerList'
import CustomerDetails from './pages/customers/CustomerDetails'
import Layout from './components/Layout'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="customer/:id" element={<CustomerDetails />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
