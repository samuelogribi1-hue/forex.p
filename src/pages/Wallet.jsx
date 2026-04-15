import { useState } from "react";
import { useTransactions } from "../context/TransactionContext";
import "../styles/wallet.css";

const Wallet = () => {
  const { transactions, addTransaction } = useTransactions();

  const [amount, setAmount] = useState("");

  // 💰 Calculate balance from transactions
  const balance = transactions.reduce((acc, tx) => {
    return acc + tx.amount;
  }, 0);

  // 💵 Deposit money
  const handleDeposit = () => {
    if (!amount) return;

    addTransaction({
      id: Date.now(),
      name: "Wallet Deposit",
      amount: Number(amount),
      status: "success",
      date: new Date().toISOString().split("T")[0],
    });

    setAmount("");
  };

  // 💸 Withdraw money
  const handleWithdraw = () => {
    if (!amount) return;

    addTransaction({
      id: Date.now(),
      name: "Wallet Withdrawal",
      amount: -Number(amount),
      status: "success",
      date: new Date().toISOString().split("T")[0],
    });

    setAmount("");
  };

  return (
    <div className="wallet-container">
      <h1>Wallet</h1>

      {/* BALANCE CARD */}
      <div className="balance-card">
        <p>Current Balance</p>
        <h2>₦{balance.toLocaleString()}</h2>
      </div>

      {/* INPUT */}
      <div className="wallet-actions">
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <div className="btn-group">
          <button onClick={handleDeposit} className="deposit">
            Deposit
          </button>

          <button onClick={handleWithdraw} className="withdraw">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;