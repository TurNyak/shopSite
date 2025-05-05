import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">Магазин</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Товары</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/news">Новости</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/register">Регистрация</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/admin">Админ</Link></li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
