import { createContext, useContext, useState } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "Samuel Ogribi",
      amount: 5000,
      status: "success",
      date: "2026-04-10",
    },
  ]);

  const addTransaction = (tx) => {
    setTransactions((prev) => [tx, ...prev]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);