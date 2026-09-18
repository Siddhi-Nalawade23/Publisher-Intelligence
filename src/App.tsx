import { useState } from 'react';
import './App.css'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from 'react-router-dom';
import Field from './pages/Field';

function App() {
  const [activeNav, setActiveNav] = useState("field");

  return (
    <div className="app">
      <Header
        productName="Publisher Intelligence"
        subtitle="The four buckets"
        badgeLabel="Straw man v0.1 — sample data"
        userInitials="GB"
      />

      <div className="body">
        <Sidebar activeId={activeNav} onSelect={setActiveNav} />

        <main className="main">
          <Routes>
            <Route path="/" element={<Field />} />

          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
