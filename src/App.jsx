import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CopyWritterPage from "./Pages/CopyWritterPage";
import SalesManager from "./Pages/SalesManager";
import SalesChatArea from "./Pages/SalesChatArea";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/copy-writting" element={<CopyWritterPage />} />
        <Route path="/chat" element={<SalesChatArea />} />
        <Route path="/sales-manager" element={<SalesManager />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
