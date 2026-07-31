import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>

      <Link to="/">
        Amazon Logo
      </Link>

      <Link to="/cart">
        Cart
      </Link>

    </nav>
  );
}

export default Navbar;