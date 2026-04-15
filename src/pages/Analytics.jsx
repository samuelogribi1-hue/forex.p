import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { useTransactions } from "../context/TransactionContext";
import "../styles/analytics.css";

const Analytics = () => {
  const { transactions } = useTransactions();

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  const balance = income - expenses;

  const chartData = transactions.map((t, i) => ({
    day: `D${i + 1}`,
    amount: t.amount,
  }));

  const pieData = [
    { name: "Income", value: income },
    { name: "Expenses", value: expenses },
  ];

  const COLORS = ["#16a34a", "#dc2626"];

  return (
    <div className="analytics-container">

      <h1 className="analytics-title">📊 Analytics Dashboard</h1>

      {/* STATS */}
      <div className="analytics-stats">

        <div className="stat-card">
          <p className="stat-label">Total Income</p>
          <h2 className="stat-value green">₦{income}</h2>
        </div>

        <div className="stat-card">
          <p className="stat-label">Total Expenses</p>
          <h2 className="stat-value red">₦{expenses}</h2>
        </div>

        <div className="stat-card">
          <p className="stat-label">Balance</p>
          <h2 className="stat-value">₦{balance}</h2>
        </div>

      </div>

      {/* LINE CHART */}
      <div className="chart-box">
        <p className="chart-title">Transaction Trend</p>

        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={chartData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#111827" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* PIE CHART */}
      <div className="chart-box">
        <p className="chart-title">Income vs Expenses</p>

        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={90} label>
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Analytics;