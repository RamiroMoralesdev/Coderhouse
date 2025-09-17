import CartWidget from "./CardWidget";


export default function Navbar() {
    return (
      <nav className="">
        <ul className="" style={{ listStyleType: 'none', display: 'flex', gap: '1rem' }}>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Sobre mí</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
        <CartWidget link="google.com" />
        
      </nav>
    );
  }
  