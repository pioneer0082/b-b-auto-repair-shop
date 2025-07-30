import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['Paid Debt', 'Remaining Debt'],
  datasets: [
    {
      label: 'Debt Status',
      data: [1750, 8250], // Example: Paid vs. Remaining
      backgroundColor: ['#4ade80', '#f87171'],
      borderWidth: 1,
    },
  ],
}

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">📊 Dashboard</h1>
      <div className="max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Total Debt Overview</h2>
        <Doughnut data={data} />
      </div>
    </div>
  )
}

export default Dashboard
