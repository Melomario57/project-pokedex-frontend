function Footer(){
  return(
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mi PokéApp. Todos los derechos reservados.</p>
      <div className="footer__links">
        <a href="https://www.pokemon.com/es" target="_blank" rel="noopener noreferrer">Acerca de</a>
        <a href="https://support.pokemon.com/hc/es" target="_blank" rel="noopener noreferrer">Contacto</a>
        <a href="https://www.pokemon.com/es/legal/" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
      </div>
    </footer>
  )
}

export default Footer;