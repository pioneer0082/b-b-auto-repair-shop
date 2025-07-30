import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Customers', path: '/customers' },
    // Future categories can be added here
  ]

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white border-r shadow-sm">
        <div className="p-4 text-xl font-bold text-blue-600">Automobile CRM</div>
        <nav className="mt-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg mx-2 text-sm font-medium ${isActive
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-200'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}
