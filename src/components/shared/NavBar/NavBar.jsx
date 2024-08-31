import { Link } from "react-router-dom";
import "./navbar.css";

const rutas = [
  { id: 0, href: "/", title: "Inicio" },
  { id: 1, href: "/servicios", title: "Servicios" },
  { id: 2, href: "/productos", title: "Productos" },
  { id: 3, href: "/reservas-contactos", title: "Reservas y Contactos" },
  { id: 4, href: "/registerPage", title: "Registrate" },
];

export default function NavBar() {
  return (
    <header className="principal">
      <Link to="/" className="logo">
        Letty Salón & Spa
      </Link>
      <nav className="navbar">
        <ul>
          {rutas.map(({ href, title, id }) => (
            <li key={id}>
              <Link to={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
