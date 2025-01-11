import React, { useState } from 'react';
import search from "../images/busqueda.svg"

function SearchBar({ onSearch, onClear }){
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onClear();
  };
  return(
    <div className="header__search">
      <input 
        className="header__search_input"
        placeholder="Busca aqui tu pokemon"
        value={searchTerm}
        onChange={handleInputChange}/>
      <button className="header__search_button" onClick={handleSearch}>
        <img className="header__search_button-img" src={search} alt="search"/>
      </button>
      <button className="header__clear_button" onClick={handleClear}>
        Limpiar busqueda
      </button>
    </div>
  )
}

export default SearchBar;