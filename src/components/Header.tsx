import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to='/'>Page1</Link>
      <Link to='/Page2'>Page2</Link>
    </header>
  );
}
