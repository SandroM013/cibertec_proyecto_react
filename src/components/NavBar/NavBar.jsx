import "./navbar.css"

const rutas = [
    {id:0, href: "#", title: "Inicio"},
    {id:1, href: "#", title: "Servicios"},
    {id:2, href: "#", title: "Productos"},
    {id:3, href: "#", title: "Reservas y Contactos"},
]

export default function NavBar(){
    return(
        <div className="principal">
            <a href="Inicio.html" className="logo">Letty Salón & Spa</a>
            <nav className="navbar">
                <ul>
                    {rutas.map(({href, title, id}) => (
                        <li key={id}><a href={href}>{title}</a></li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}