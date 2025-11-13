import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-7 bg-gray-100 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">My React Website</h1>

      <nav className="space-x-6 mr-7">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </Link>
      </nav>
    </header>
  );
}
