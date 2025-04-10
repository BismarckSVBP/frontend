
import { Navigate, Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";

import ContactUsPage from "./pages/ContactUsPage";

import AdminPanel from "./pages/AdminPanel";
import About from "./pages/About";

import Layout from "./components/Layout";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br
      from-[#0B0C10] via-[#1F2833] to-[#45A29E] 
      flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating background shapes */}
      <FloatingShape
        color="bg-indigo-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-cyan-500"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-purple-500"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/about" element={<About />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </Layout>
      <Toaster />
    </div>
  );
}

export default App;
