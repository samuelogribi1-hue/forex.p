import { useState } from "react";
import { Send } from "lucide-react";
import { useTransactions } from "../context/TransactionContext";
import "../styles/sendMoney.css";

const SendMoney = () => {
  const { addTransaction } = useTransactions();

  const [form, setForm] = useState({
    name: "",
    amount: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      id: Date.now(),
      name: form.name,
      amount: Number(form.amount),
      status: "success",
      date: new Date().toISOString().split("T")[0],
    });

    setForm({ name: "", amount: "", note: "" });
  };

  return (
    <div className="send-container">
      <h1>Send Money</h1>

      <form onSubmit={handleSubmit} className="send-form">

        <input
          className="send-input"
          name="name"
          placeholder="Recipient name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="send-input"
          name="amount"
          type="number"
          placeholder="Amount (₦)"
          value={form.amount}
          onChange={handleChange}
        />

        <textarea
          className="send-textarea"
          name="note"
          placeholder="Note (optional)"
          value={form.note}
          onChange={handleChange}
        />

        <button className="send-btn">
          <Send />
          Send Money
        </button>

      </form>
    </div>
  );
};

export default SendMoney;