import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className="header">
      <h1>My React Website</h1>
      <nav>
        <Link to="/"> <a href="#">Home</a> </Link>
        <Link to="/about"> <a href="#">About</a> </Link>
        <Link to="/contact"> <a href="#">Contact</a> </Link>
      </nav>
    </header>
  );
};

export default Header;
