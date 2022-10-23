import React, { useState } from "react";
import Landing from "./components/signInAndReg/landing";
import Order from "./components/order/orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing user={user} setUser={setUser} />} />
          <Route
            path="/order"
            element={<Order user={user} setUser={setUser} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
