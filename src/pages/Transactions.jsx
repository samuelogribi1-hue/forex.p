import { useTransactions } from "../context/TransactionContext";

const Transactions = () => {
  const { transactions } = useTransactions();

  const statusStyle = (status) =>
    status === "success"
      ? "text-green-600 bg-green-100"
      : "text-yellow-600 bg-yellow-100";

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">Transactions 🧾</h1>

      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="p-3">Name</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{tx.name}</td>
              <td className="p-3 font-bold">₦{tx.amount}</td>
              <td className="p-3">
                <span className={`px-2 py-1 rounded text-sm ${statusStyle(tx.status)}`}>
                  {tx.status}
                </span>
              </td>
              <td className="p-3 text-gray-500">{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;