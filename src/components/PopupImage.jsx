import closeIcon from '../images/close-icon.svg'

function PopupImage({ pokemon, isOpen, onClose }){
  if (!pokemon) {
    return null
  };
  return(
    <div id={`popup-${pokemon.name}`} className={`popup popup_type_${pokemon.name} ${isOpen ? "popup__opened" : ""}`}>
          <div className="popup__contain">
            <img
              src={closeIcon}
              id={`close-icon-${pokemon.name}`}
              alt="icono de cierre"
              className="popup__contain_close-icon"
              onClick={onClose}
            />
            <h4 className="popup__contain_title">{pokemon.name}</h4>
            <img 
              src={pokemon.image}
              alt={`imagen de ${pokemon.name}`}
              className='popup__contain_img'/>
            <ul>
              {console.log('stadisticasssss',pokemon.stats)}
              <li>HP: {pokemon.stats.hp || 'N/A'}</li>
              <li>Attack: {pokemon.stats.attack || 'N/A'}</li>
              <li>Defense: {pokemon.stats.defense || 'N/A'}</li>
              <li>Speed: {pokemon.stats.speed || 'N/A'}</li>
            </ul>
          </div>
        </div>
  )
}

export default PopupImage;