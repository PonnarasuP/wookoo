import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart, User, Package } from 'lucide-react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">E-Commerce</Link>
          <div className="flex gap-4">
            <Link to="/products"><Package /></Link>
            <Link to="/cart"><ShoppingCart /></Link>
            <Link to="/auth"><User /></Link>
          </div>
        </nav>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<h1>Welcome to E-Commerce</h1>} />
            <Route path="/products" element={<h1>Products</h1>} />
            <Route path="/cart" element={<h1>Cart</h1>} />
            <Route path="/auth" element={<h1>Auth</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
