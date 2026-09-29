import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Field from "./pages/Field";
import Strategic from "./pages/Strategic";
import Business from "./pages/Business";
import Editorial from "./pages/Editorial";

function App() {
  return (
    <div className="app">
      <Header
        productName="Publisher Intelligence"
        subtitle="The four buckets"
        badgeLabel="Straw man v0.1 — sample data"
        userInitials="GB"
      />
      <div className="main-content">
        <Sidebar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Field />} />
            <Route path="/strategic" element={<Strategic />} />
            <Route path="/business" element={<Business />} />
            <Route path="/editorial" element={<Editorial />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
