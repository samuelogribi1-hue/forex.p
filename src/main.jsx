import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import { TransactionProvider } from "./context/TransactionContext";
import { ThemeProvider } from "./context/ThemeContext"; // 👈 ADD THIS

import "./styles/global.css";
import "./styles/sidebar.css";
import "./styles/layout.css";
import "./styles/dashboard.css";
import "./styles/form.css";
import "./styles/table.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider> {/* 👈 ADD THIS WRAPPER */}
        <TransactionProvider>
          <AppRoutes />
        </TransactionProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);