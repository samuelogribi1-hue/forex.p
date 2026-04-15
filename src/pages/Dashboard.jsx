import { useNavigate } from "react-router-dom";
import { useTransactions } from "../context/TransactionContext";
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const { transactions } = useTransactions();

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((a, b) => a + b.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((a, b) => a + Math.abs(b.amount), 0);

  const balance = income - expenses;

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <h1>Welcome back </h1>
        <p>Here’s your financial overview</p>
      </div>

      {/* CARDS */}
      <div className="card-grid">

        <div className="card dark">
          <p className="card-title">Total Balance</p>
          <h2 className="card-value">₦{balance}</h2>
        </div>

        <div className="card">
          <p className="card-title">Income</p>
          <h2 className="card-value" style={{ color: "#16a34a" }}>
            ₦{income}
          </h2>
        </div>

        <div className="card">
          <p className="card-title">Expenses</p>
          <h2 className="card-value" style={{ color: "#dc2626" }}>
            ₦{expenses}
          </h2>
        </div>

        <div className="card">
          <p className="card-title">Transactions</p>
          <h2 className="card-value">{transactions.length}</h2>
        </div>

      </div>

      {/* QUICK ACTIONS */}
      <div className="section">
        <h3>Quick Actions</h3>

        <div className="actions">
          <button
            className="action-btn"
            onClick={() => navigate("/send")}
          >
            Send Money
          </button>

          <button
            className="action-btn"
            onClick={() => navigate("/wallet")}
          >
            Wallet
          </button>
        </div>
      </div>

      {/* RECENT TRANSACTIONS */}
      <div className="section">
        <h3>Recent Transactions</h3>

        {transactions.slice(0, 5).map((tx) => (
          <div key={tx.id} className="tx-item">
            <span className="tx-name">{tx.name}</span>
            <span className="tx-amount">₦{tx.amount}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Dashboard;