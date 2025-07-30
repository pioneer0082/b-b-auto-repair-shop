import React, { useState } from 'react'

interface Props {
    onClose: () => void
}

const PostPaymentModal: React.FC<Props> = ({ onClose }) => {
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [method, setMethod] = useState('')
    const [notes, setNotes] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const paymentData = { amount, date, method, notes }
        console.log('New Payment:', paymentData)
        onClose()
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Post New Payment</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-black">&times;</button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="number"
                        placeholder="Amount ($)"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    />
                    <select
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                        className="w-full border p-2 rounded"
                        required
                    >
                        <option value="">Select Method</option>
                        <option value="Cash">Cash</option>
                        <option value="Check">Check</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Notes"
                        className="w-full border p-2 rounded"
                        rows={3}
                    />
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Submit Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostPaymentModal
